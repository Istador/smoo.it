<template>
  <b-icon
    :icon="icon"
    :animation="animation"
    :class="{ 'state-component': true, [ state ]: true }"
    v-b-tooltip.topright="() => title()"
  />
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
