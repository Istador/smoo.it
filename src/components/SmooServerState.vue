<template>
  <span
    v-b-tooltip.html.topright="() => title()"
    :class="{ 'state-component': true, [ state ]: true }"
  >
    <b-icon
      :icon="icon"
      :animation="animation"
    />
  </span>
</template>

<style lang="scss">
.state-component {
  &.loading { color: orange; }
  &.offline { color: red; }
  &.online { color: green; }
  &.unknown { color: black; }
}
</style>

<script lang="ts" src="./SmooServerState.ts"/>
