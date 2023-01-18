<template>
  <b-modal :id="$attrs.id" hide-footer size="lg" @show="moons.fetch() ; stages.fetch()">
    <template #modal-title><kbd>&lt;shine-id&gt;</kbd> values for <kbd>shine send</kbd> </template>

    <b-overlay :show="moons.loading || stages.loading" variant="transparent" no-wrap />
    <div v-if="!(moons.initialized && stages.initialized) && !((moons.error && !moons.initialized) || (stages.error && !stages.initialized))" style="min-height: 10rem;"/>

    <b-alert show variant="danger" v-if="(moons.error && !moons.initialized) || (stages.error && !stages.initialized)">
      <b-btn title="retry" size="sm" class="float-right" @click="!moons.initialized && moons.fetch() ; !stages.initialized && stages.fetch()"><b-icon icon="arrow-counterclockwise"/></b-btn>
      <b-icon icon="exclamation-triangle" scale="1.2" class="mr-2"/>
      <b>Error:</b>
      <div v-if="(moons.error  && !moons.initialized)">{{ moons.error }}</div>
      <div v-if="(stages.error && !stages.initialized)">{{ stages.error }}</div>
    </b-alert>

    <div class="smoo-accordion accordion" v-if="moons.initialized && stages.initialized">
      <smoo-card
        v-for="(kmoons, k) in moons.result || []"
        :key="k"
        accordion="host-commands-shine-id"
        :header="kingdoms[k] || 'Unknown'"
      >
        <div class="table-responsive">
          <table class="table table-striped table-borderless text-left table-sm mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Shine-ID</th>
                <th style="min-width: 150px;">Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(moon, nr) in kmoons" :key="'x' + nr">
                <td>{{ nr < 10 ? '0' + nr : nr }}</td>
                <td>
                  <kbd v-if="moon.id">{{ moon.id }}</kbd>
                  <span
                    v-else
                    class="text-warning"
                    v-b-tooltip="{boundary:'viewport'}"
                    title="The ID of this moon is currently unknown. It is not synced between players."
                  >
                    <b-icon icon="question-circle-fill"/>
                  </span>
                </td>
                <td>
                  {{ moon.name || '?' }}
                  <span v-if="moon.extra"    v-b-tooltip="{boundary:'viewport'}" title="Moon Rock" style="color: #b79800;"><b-icon-box scale="1.1"/></span>
                  <span v-if="moon.toadette" v-b-tooltip="{boundary:'viewport'}" title="Toadette Moon" style="color: purple;"><b-icon-star scale="1.1"/></span>
                </td>
                <td :mk="mk = stage2kingdom(k, moon.stage)" :stage="stage = moon2stage(mk, moon)">
                  <b-button-group size="sm" v-if="stage">
                    <b-btn                           v-b-tooltip.html="{boundary:'viewport'}" :title="moonStageTitle(k, mk, moon, stage)"><b-icon :icon="moonStageIcon(stage)"/></b-btn>
                    <b-btn v-if="moon.story"         v-b-tooltip.html="{boundary:'viewport'}"  title="<b>Story moon</b><br/>This moon progresses the story and comes with a cut-scene."><b-icon icon="chat-left-text"/></b-btn>
                    <b-btn v-if="moon.boss"          v-b-tooltip.html="{boundary:'viewport'}"  title="<b>Boss moon</b><br/>This moon is the reward for beating a boss."><font-awesome-icon icon="fa-solid fa-skull"/></b-btn>
                    <b-btn v-if="moon.multi"         v-b-tooltip.html="{boundary:'viewport'}"  title="<b>Multi moon</b><br/>Counting as 3 moons instead of 1 moon.">3x</b-btn>
                    <b-btn v-if="moon.changeStageTo" v-b-tooltip.html="{boundary:'viewport'}" :title="moonScenarioTitle(mk, moon)"><b-icon icon="cloud-upload"/></b-btn>
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

<script lang="ts" src="./moons-modal.ts"/>
