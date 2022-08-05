<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="yuzu"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Play with the <code>Yuzu</code> emulator</template>
    TODO
  </smoo-card>
</template>
