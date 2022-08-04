<template>
  <div>

    <b-card-group columns deck class="host-view">

      <b-card header="Requirements">
        <ul>
          <li>Public IPv4 address</li>
          <li>Open port</li>
          <li>Computer</li>
        </ul>
      </b-card>

      <b-card header="Links">
        <b-btn-group
          vertical
          style="width: 100%;"
        >
          <b-btn
            class="extern"
            variant="outline-secondary"
            href="https://github.com/Sanae6/SmoOnlineServer"
            target="_blank"
          >C# Server GitHub [Official]</b-btn>
          <b-btn
            class="extern"
            variant="outline-secondary"
            href="https://github.com/JulesGuesnon/smo-online-server"
            target="_blank"
          >Rust Server GitHub</b-btn>
        </b-btn-group>
      </b-card>

    </b-card-group>

    <host-binary   class="mt-4" :visible="id === 'binary'"/>
    <host-docker   class="mt-4" :visible="id === 'docker'"/>
    <host-settings class="mt-4" :visible="id === 'settings'"/>
    <host-commands class="mt-4" :visible="id === 'commands'"/>
    <host-discord  class="mt-4" :visible="id === 'discord'"/>
    <host-router   class="mt-4" :visible="id === 'router'"/>
    <host-vpn      class="mt-4" :visible="id === 'vpn'"/>
    <host-remote   class="mt-4" :visible="id === 'remote'"/>
  </div>
</template>

<script lang="ts" src="./host.ts"/>
