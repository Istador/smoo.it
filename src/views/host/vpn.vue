<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="host"
    key="vpn"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Hosting with a virtual private network</template>
    TODO
    <!--
      OpenVPN?
      Hamachi
      Zerotier
      ngrok
      ...
    -->
  </smoo-card>
</template>
