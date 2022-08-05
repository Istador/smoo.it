<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="host"
    key="remote"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Hosting on remote server(s)</template>
    TODO
    <!--
      AWS
      Azure
      Fly.io
      ...
      k8s
    -->
  </smoo-card>
</template>
