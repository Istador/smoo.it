<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="build"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Build the mod from sources</template>
    TODO
  </smoo-card>
</template>
