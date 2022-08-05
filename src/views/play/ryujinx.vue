<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="ryujinx"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Play with the <code>Ryujinx</code> emulator</template>
    TODO
  </smoo-card>
</template>
