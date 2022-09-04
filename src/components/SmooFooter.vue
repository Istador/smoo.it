<template>
  <footer>
    <nav>
      <a-ext href="https://discord.gg/w3TnB899ww">Discord</a-ext> |
      <a-ext href="https://github.com/Istador/smoo.it">GitHub</a-ext> |
      <a-ext href="https://rcl.smoo.it/legal">Legal notice</a-ext>
      <b-checkbox class="dark-mode" v-model="darkMode" switch> Dark mode</b-checkbox>
    </nav>
  </footer>
</template>

<script lang="ts" src="./SmooFooter.ts"/>

<style lang="scss">
footer {
  opacity: 0.5;
  filter: saturate(0);
  nav {
    padding: 30px;
    .dark-mode {
      opacity: 0.5;
    }
  }
}
</style>
