<template>
  <b class="smoo-btn" :title="title">
    <span v-if="custom" :class="{ [btn]: true }">{{ btn }}</span>
    <b-icon v-else :icon="icon" :title="title"/>
  </b>
</template>

<script lang="ts" src="./SmooBtn.ts"/>
<style lang="scss" src="./SmooBtn.scss"/>
