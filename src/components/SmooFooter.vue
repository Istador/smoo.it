<template>
  <footer>
    <nav>
      <a-ext href="https://discord.gg/w3TnB899ww" icon="discord">Discord</a-ext>
      <a-ext href="https://github.com/Istador/smoo.it" icon="github">GitHub</a-ext>
      <a-ext href="https://rcl.smoo.it/legal" icon="file-earmark-text">Legal notice</a-ext>
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
    a {
      display: inline-block;
      margin: 0 0.375rem 0.75rem;
      &:first-of-type { margin-left:  0; }
      &:last-of-type  { margin-right: 0; }
      &.extern {
        color: #3d3d3d !important;
        background: none !important;
        padding: 0 !important;
        text-decoration: none;
        &:hover, &:focus {
          text-decoration: underline;
        }
      }
    }
    .dark-mode {
      opacity: 0.5;
    }
  }
}
</style>
