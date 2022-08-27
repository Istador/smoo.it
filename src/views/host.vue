<template>
  <div class="host-view">

    <b-card-group columns deck>

      <b-card header="Requirements" class="mb-4">
        <ul>
          <li>Public IPv4 address</li>
          <li>Open port</li>
          <li>Computer</li>
        </ul>
      </b-card>

      <b-card header="Links" class="mb-4">
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
          >Rust Server 1 GitHub</b-btn>
          <b-btn
            class="extern"
            variant="outline-secondary"
            href="https://github.com/speyejack/smo-multi-rs"
            target="_blank"
          >Rust Server 2 GitHub</b-btn>
        </b-btn-group>
      </b-card>

    </b-card-group>

    <host-binary   class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'binary'"/>
    <host-docker   class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'docker'"/>
    <host-settings class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'settings'"/>
    <host-commands class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'commands'"/>
    <host-discord  class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'discord'"/>
    <host-router   class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'router'"/>
    <host-vpn      class="mb-4" @show="show($event)" @hidden="hidden($event)" :visible="id === 'vpn'"/>
    <host-remote                @show="show($event)" @hidden="hidden($event)" :visible="id === 'remote'"/>
  </div>
</template>

<script lang="ts" src="./host.ts"/>
