<template>
  <div class="servers-view">
    <b-table
      :items="servers"
      :fields="fields"
      sort-by="state"
      striped
    >
      <template #cell(state)="{ item: { name, server, settings, dead } }">
        <smoo-server-state
          :name="name"
          :server="server"
          :settings="settings"
          :can-be-dead="dead"
          @state="server.state = $event"
        />
      </template>

      <template #head(server)>
        Server
        <b-icon icon="info-circle-fill" id="servers-hostname" @click.stop.prevent/>
        <b-tooltip target="servers-hostname" triggers="hover">
          <p>
            Entering the hostname instead of an IPv4 address or changing the port is only possible
            with mod version <code>v1.1.0</code> or
            <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/latest">later</a-ext>.
          </p>
        </b-tooltip>
      </template>

      <template #cell(server)="{ item: { name, server: { host, ip, port }, link } }">
        <div class="name"><b>{{ name }}</b></div>
        <div class="host" v-if="host">
          <span :id="'servers-ip-' + host + '-' + port">
            <a-ext v-if="link" :href="link">{{ host }}</a-ext>
            <span v-else>{{ host }}</span>
          </span>
          <b-tooltip
            :target="'servers-ip-' + host + '-' + port"
            placement="top"
            boundary="viewport"
          >
            <span v-html="getIPv4({ host, port, ip })"/>
          </b-tooltip>
        </div>
        <div class="port" :class="{ 'default': (port || defaultPort) === defaultPort }">{{ port || defaultPort }}</div>
      </template>

      <template #head(location)>
        <span class="location-long">Location</span>
        <span class="location-short" title="Location">Loc.</span>
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
        <div v-show="typeof version === 'object' && version.details" class="details">
          <b-icon icon="exclamation-triangle-fill" v-b-tooltip.html.bottomleft="((typeof version === 'object' && version.details) || '')"/>
        </div>
        <div v-html="(typeof version === 'object' ? version.html : version)"/>
      </template>

    </b-table>
  </div>
</template>

<style lang="scss" src="./servers.scss"/>

<script lang="ts" src="./servers.ts"/>
