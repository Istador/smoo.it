<template>
  <div class="app">
    <smoo-header/>
    <router-view/>
    <smoo-footer/>
  </div>
</template>

<style lang="scss" src="./App.scss" />

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SmooHeader from './components/SmooHeader.vue'
import SmooFooter from './components/SmooFooter.vue'

@Component({
  components: {
    SmooHeader,
    SmooFooter,
  },
})
export default class State extends Vue {
}
</script>
