<template>
  <smoo-card
    :visible="$attrs.visible"
    :link="{ name: 'host', params: { id: 'remote' } }"
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
