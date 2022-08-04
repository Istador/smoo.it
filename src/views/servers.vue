<template>
  <div class="servers-view">
    <b-table
      :items="servers"
      :fields="fields"
      sort-by="state"
      striped
    >

      <template #cell(state)="{ item: { server } }">
        <smoo-server-state :server="server" @state="server.state = $event"/>
      </template>

      <template #cell(server)="{ item: { server: { host, ip } } }">
        <span class="host" v-if="host">{{ host }}</span>
        <br v-if="host && ip"/>
        <span class="ip" v-if="ip">{{ ip }}</span>
      </template>

      <template #cell(port)="{ item: { server: { port } } }">
        <span>{{ port || defaultPort }}</span>
      </template>

      <template #cell(location)="{ item }">
        <div>
          <span class="flag-icon">
            <country-flag
              :title="item.location.name"
              :country="item.location.flag"
              size="normal"
              rounded
            />
          </span>
          <span class="name"> {{ item.location.name }}</span>
        </div>
      </template>

      <template #cell(version)="{ item: { version } }">
        <span v-html="version"/>
      </template>

    </b-table>
  </div>
</template>

<style lang="scss" src="./servers.scss"/>

<script lang="ts" src="./servers.ts"/>
