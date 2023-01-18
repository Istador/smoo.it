<template>
  <b-modal :id="$attrs.id" hide-footer size="lg" @show="stages.fetch">
    <template #modal-title><kbd>&lt;stage&gt;</kbd> values for <kbd>send</kbd> and <kbd>sendall</kbd></template>

    <b-overlay :show="stages.loading" variant="transparent" no-wrap />
    <div v-if="!stages.initialized && !stages.error" style="min-height: 10rem;"/>

    <b-alert show variant="danger" v-if="stages.error && !stages.initialized">
      <b-btn title="retry" size="sm" class="float-right" @click="stages.fetch"><b-icon icon="arrow-counterclockwise"/></b-btn>
      <b-icon icon="exclamation-triangle" scale="1.2" class="mr-2"/>
      <b>Error:</b>
      <div>{{ stages.error }}</div>
    </b-alert>

    <div class="smoo-accordion accordion" v-if="stages.initialized">
      <smoo-card
        v-for="(kstages, k) in stages.result || []"
        :key="k"
        accordion="host-commands-stage-known"
        :header="(k === 'all' ? 'All' : kingdoms[k] || 'Unknown')"
      >
        <div class="table-responsive">
          <table class="table table-striped table-borderless text-left table-sm mb-0">
            <thead>
              <tr>
                <th>Stage</th>
                <th style="min-width: 150px;">Name</th>
                <th>Hints</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(stage, s) in kstages" :key="s">
                <td><kbd>{{ s }}</kbd></td>
                <td>
                  {{ stage.name || '?' }}
                  <span v-if="stage.extra" v-b-tooltip="{boundary:'viewport'}" title="Moon Rock" style="color: #b79800;"><b-icon-box scale="1.1"/></span>
                </td>
                <td>
                  <b-button-group size="sm">
                    <!-- Subarea? -->
                    <smoo-hint icon="globe"           v-if="(stage.subarea || false) === false" title="Overworld" />
                    <smoo-hint icon="house-door"      v-if="stage.subarea === true"             title="Subarea"   />
                    <smoo-hint icon="snow"            v-if="stage.subarea === 'shiveria'"       title="Shiveria"  />
                    <smoo-hint icon="tree-fill"       v-if="stage.subarea === 'deep'"           title="<b>Deep Woods</b><br/>Considered its own Kingdom in Hide &amp; Seek!" />
                    <smoo-hint fa="fa-solid fa-skull" v-if="stage.subarea === 'boss'"           title="<b>Boss Fight</b><br/>Forbidden in Hide &amp; Seek!" />

                    <!-- Top/Bottom -->
                    <smoo-hint icon="arrow-up"    v-if="stage.top  === true"  title="Top"    />
                    <smoo-hint icon="arrow-down"  v-if="stage.top  === false" title="Bottom" />

                    <!-- Left/Right -->
                    <smoo-hint icon="arrow-left"  v-if="stage.left === true"  title="Left"   />
                    <smoo-hint icon="arrow-right" v-if="stage.left === false" title="Right"  />

                    <!-- Section -->
                    <smoo-hint v-if="stage.cell" :title="'Section ' + stage.cell">{{stage.cell}}</smoo-hint>
                  </b-button-group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </smoo-card>
    </div>
  </b-modal>
</template>

<script lang="ts" src="./stages-known-modal.ts"/>
