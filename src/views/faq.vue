<template>
  <div class="faq-view smoo-accordion accordion">
    <smoo-card
      v-for="item in questions"
      :key="item.id"
      :visible="item.id === id"
      @show="show(item.id)"
      @hidden="hidden(item.id)"
      accordion="questions"
    >
      <template #header><component :is="{ template: '<span>' + item.question + '</span>' }"/></template>
      <component :is="{ template: '<div>' + item.answer + '</div>' }"/>
    </smoo-card>
  </div>
</template>

<script lang="ts" src="./faq.ts"/>
