<template>
  <b-btn
    v-b-tooltip.html="{boundary:'viewport'}"
    :title="title"
    :pressed.sync="pressed"
  >
    <b-icon v-if="icon" :icon="icon"/>
    <font-awesome-icon v-if="fa" :icon="fa"/>
    <slot/>
  </b-btn>
</template>

<script lang="ts" src="./SmooHint.ts"/>
