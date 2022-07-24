<template>
  <header>
    <img
      alt="Super Mario Odyssey: Online Logo"
      title="Super Mario Odyssey: Online"
      src="@/assets/logo.png"
      width="144"
      height="128"
    >
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
  nav {
    padding: 30px;
  }
}
</style>
