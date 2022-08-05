<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="hide-and-seek"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Common Hide &amp; Seek rules</template>
    TODO
  </smoo-card>
</template>
