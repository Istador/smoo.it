<template><a
  :href="$attrs.href"
  class="extern"
  target="_blank"
><b-icon
  v-if="$attrs.icon"
  :icon="$attrs.icon"
  class="mr-1"
/><slot
/></a></template>
<script>export default { inheritAttrs: false }</script>
