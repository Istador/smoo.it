<template>
  <header>
    <router-link class="logo" :to="{ name: 'home' }">
      <img
        alt="Super Mario Odyssey: Online Logo"
        title="Super Mario Odyssey: Online"
        src="/img/logo.png"
        width="144"
        height="128"
      />
    </router-link>
    <nav>
      <router-link :to="{ name: 'home'    }">Home</router-link> |
      <router-link :to="{ name: 'servers' }">Servers</router-link> |
      <router-link :to="{ name: 'play'    }">Play</router-link> |
      <router-link :to="{ name: 'host'    }">Host</router-link> |
      <router-link :to="{ name: 'faq'     }">FAQ</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  .logo {
    outline: unset;
  }
  nav {
    padding: 30px;

    a {
      text-decoration: none;
      outline: unset;

      &.router-link-exact-active, &.router-link-active:not(:first-child) {
        font-weight: bold;
      }

      &:focus, &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
