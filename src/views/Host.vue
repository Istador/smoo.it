<template>
  <b-card-group columns deck class="host-view">

    <b-card header="Requirements">
      <ul>
        <li>Public IPv4 address</li>
        <li>Open port</li>
        <li>Computer</li>
      </ul>
    </b-card>

    <b-card header="Links">
      <b-btn-group
        vertical
        style="width: 100%;"
      >
        <b-btn
          class="extern"
          variant="outline-secondary"
          href="https://github.com/Sanae6/SmoOnlineServer"
          target="_blank"
        >GitHub repository</b-btn>
      </b-btn-group>
    </b-card>
  </b-card-group>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Host extends Vue {}
</script>
