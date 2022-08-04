<template>
  <div class="faq-view accordion">
    <smoo-card
      v-for="item in questions"
      :key="item.question"
      :visible="item.id === id"
      @show="show(item.id)"
      @hidden="hidden(item.id)"
      accordion="questions"
    >
      <template #header><span v-html="item.question"/></template>
      <component :is="{ template: '<div>' + item.answer + '</div>' }"/>
    </smoo-card>
  </div>
</template>

<style lang="scss">
  .faq-view {
    text-align: left;
    .card .collapse.show {
      background-color: #fdfdff;
    }
    .card-header {
      &.not-collapsed {
        background-color: #e7f5f7;
        margin-bottom: 0;
      }
    }
  }
</style>

<script lang="ts" src="./faq.ts"/>
