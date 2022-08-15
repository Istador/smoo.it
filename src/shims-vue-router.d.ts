import Vue from 'vue'

declare module 'vue-router' {
  interface Next<T extends Vue = Vue, R> {
    (to?: (vm: T) => R): void
  }
}
