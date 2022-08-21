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

      <template #head(server)>
        Server
        <b-icon icon="info-circle-fill" id="servers-hostname" @click.stop.prevent/>
        <b-tooltip target="servers-hostname" triggers="hover">
          The <code>Host</code> entry is a convenient alternative to entering the IPv4 address.
          But this is currently only possible with a
          <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
          of the mod.
        </b-tooltip>
      </template>

      <template #head(port)>
        Port
        <b-icon icon="info-circle-fill" id="servers-port" @click.stop.prevent/>
        <b-tooltip target="servers-port" triggers="hover">
          Changing the port is currently only possible with a
          <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
          of the mod.
        </b-tooltip>
      </template>

      <template #cell(server)="{ item: { server: { host, ip }, link } }">
        <span class="host" v-if="host">
          <a-ext v-if="link" :href="link">{{ host }}</a-ext>
          <span v-else>{{ host }}</span>
        </span>
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
