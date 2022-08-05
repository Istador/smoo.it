<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="host"
    key="router"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Hosting behind a router</template>
    TODO
    <!--
      Public/Private IP
      Port-Forwarding
      Firewalls
      Portcheck
    -->
  </smoo-card>
</template>
