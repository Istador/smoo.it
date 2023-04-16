<template><router-link class="intern" :to="{ name: $attrs.name, params: { id: $attrs.id } }"><slot/></router-link></template>
<script>export default { inheritAttrs: false }</script>
