<template>
  <div class="servers-view">
    <b-table
      :items="servers"
      :fields="fields"
      sort-by="state"
      striped
    >
      <template #head(state)>
        State
        <b-icon icon="info-circle-fill" id="servers-state" @click.stop.prevent/>
        <b-tooltip target="servers-state" triggers="hover">
          Settings:
          <ul>
            <li>
              <code>ScenarioMerge</code>: the server forces all players to be in the same scenario to see each other.
            </li>
            <li>
              <code>ShineSync</code>: the server synchronizes moons between players that were collected while connected.
              Without <code>ClearShines</code> this means you'll likely get all moons at once.
            </li>
            <li>
              <code>PersistShines</code>: the server remembers collected moons even when it is restarted.
            </li>
            <li>
              <code>ClearShines</code>: the server forgets collected moons when a player joins with or switches to a new save file.
              This indicates a good co-op or speedrun practice server.
            </li>
          </ul>
        </b-tooltip>
      </template>

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
