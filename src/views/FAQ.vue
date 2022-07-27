<template>
  <div class="faq-view accordion">
    <b-card
      v-for="(item, i) in questions"
      :key="item.question"
      no-body
    >
      <b-card-header
        header-tag="header"
        v-b-toggle="'accordion-' + i"
        v-html="item.question"
      />
      <b-collapse
        :id="'accordion-' + i"
        :visible="i === 0"
        accordion="questions"
      >
        <b-card-body><component :is="{ template: '<div>' + item.answer + '</div>' }"/></b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<style lang="scss">
  .faq-view {
    text-align: left;
    .card-header {
      &::after {
        content: '';
        position: absolute;
        right: 1.25rem;
        margin: auto 0;
        width: 1.25rem;
        height: 1.25rem;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%234f4f4f'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 1.25rem;
        transition: transform .2s ease-in-out;
      }
      &.collapsed::after {
      }
      &.not-collapsed::after {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%231266f1'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3E%3C/svg%3E");
        transform: rotate(-180deg);
      }
    }
  }
</style>

<script lang="ts" src="./FAQ.ts"/>
