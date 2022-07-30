<template>
  <smoo-card
    :visible="$attrs.visible"
    :link="{ name: 'host', params: { id: 'vpn' } }"
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
