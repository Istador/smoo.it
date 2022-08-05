<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="play"
    key="switch"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>[TODO] Play on a hacked <code>Nintendo Switch</code> console</template>
    TODO
  </smoo-card>
</template>
