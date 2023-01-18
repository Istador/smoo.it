<template>
  <b-modal :id="$attrs.id" hide-footer>
    <template #modal-title><kbd>&lt;scenario&gt;</kbd> values for <kbd>send</kbd></template>

    <div class="smoo-accordion accordion">
      <smoo-card
        v-for="(arr, k) in scenarios"
        :key="k"
        accordion="host-commands-scenarios"
        :header="kingdoms[k]"
      >
        <table class="table table-striped table-borderless table-sm mb-0">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v, i) in arr" :key="i">
              <td><kbd>{{ i + 1 }}</kbd></td>
              <td>{{ v || '?' }}</td>
            </tr>
          </tbody>
        </table>
      </smoo-card>
    </div>
  </b-modal>
</template>

<script lang="ts" src="./scenarios-modal.ts"/>
