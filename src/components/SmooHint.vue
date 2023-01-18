<template>
  <b-btn
    v-b-tooltip.html="{boundary:'viewport'}"
    :title="title"
    :pressed.sync="pressed"
  >
    <b-icon v-if="icon" :icon="icon"/>
    <slot/>
  </b-btn>
</template>

<script lang="ts" src="./SmooHint.ts"/>
