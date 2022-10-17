<template>
  <b class="smoo-btn" :title="title">
    <span v-if="custom" :class="{ [btn]: true }">{{ btn }}</span>
    <b-icon v-if="!custom" :icon="icon" :title="title"/>
    <img v-if="!custom" :alt="title" class="alt" />
  </b>
</template>

<script lang="ts" src="./SmooBtn.ts"/>
<style lang="scss" src="./SmooBtn.scss"/>
