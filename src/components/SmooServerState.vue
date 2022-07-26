<template>
  <b-icon
    :icon="icon"
    :animation="animation"
    :class="{ 'state-component': true, [ state ]: true }"
    :title="state"
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
