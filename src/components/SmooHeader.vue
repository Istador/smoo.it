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
    <b-navbar toggleable="sm">
      <b-navbar-toggle target="navigation"/>
      <b-collapse is-nav id="navigation" ref="collapse" class="justify-content-center">
        <b-navbar-nav class="nav-pills">
          <b-nav-item :to="{ name: 'home'    }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'servers' }">Servers</b-nav-item>
          <b-nav-dd right>
            <template #button-content>
              <span @click.stop.prevent="blur">
                <router-link class="nav-split-link" :to="{ name: 'play' }">Play</router-link>
              </span>
            </template>
            <b-dd-item :to="{ name: 'play', params: { id: 'hide-and-seek'} }" disabled>Hide &amp; Seek Rules</b-dd-item>
            <b-dd-item :to="{ name: 'play', params: { id: 'switch'} }" disabled>Play on Switch</b-dd-item>
            <b-dd-item :to="{ name: 'play', params: { id: 'ryujinx'} }" disabled>Play with Ryujinx</b-dd-item>
            <b-dd-item :to="{ name: 'play', params: { id: 'yuzu'} }" disabled>Play with Yuzu</b-dd-item>
          </b-nav-dd>
          <b-nav-dd right>
            <template #button-content>
              <span @click.stop.prevent="blur">
                <router-link class="nav-split-link" :to="{ name: 'host' }" @click.stop.prevent>Host</router-link>
              </span>
            </template>
            <b-dd-item :to="{ name: 'host', params: { id: 'binary'} }">Run with binary files</b-dd-item>
            <b-dd-item :to="{ name: 'host', params: { id: 'docker'} }">Run with <code>docker-compose</code></b-dd-item>
            <b-dd-item :to="{ name: 'host', params: { id: 'settings'} }">Edit <code>settings.json</code></b-dd-item>
            <b-dd-item :to="{ name: 'host', params: { id: 'commands'} }">Interactive commands</b-dd-item>
            <b-dd-item :to="{ name: 'host', params: { id: 'discord'} }">Discord bot</b-dd-item>
            <b-dd-item :to="{ name: 'host', params: { id: 'router'} }" disabled>Behind a router</b-dd-item>
            <b-dd-item :to="{ name: 'host', params: { id: 'vpn'} }" disabled>Virtual Private Network</b-dd-item>
            <b-dd-item :to="{ name: 'host', params: { id: 'remote'} }" disabled>Remote server</b-dd-item>
          </b-nav-dd>
          <b-nav-item :to="{ name: 'faq'     }">FAQ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style lang="scss" src="./SmooHeader.scss"/>
<script lang="ts" src="./SmooHeader.ts"/>
