<template>
  <div class="servers-view">
    <b-table
      :items="servers"
      :fields="fields"
      striped
    >

      <template #cell(state)="{ item: { server } }">
        <smoo-server-state :server="server"/>
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

<style lang="scss">
.servers-view {
  table {
    width: auto;
    display: inline-block;
    thead {
      th {
        position: sticky !important;
        top: 0;
        background-color: white;
        z-index: 999;
      }
    }
    tbody {
      td { vertical-align: middle; }

      .td-server {
        .host, .ip { font-family: monospace; }
        @media (min-width: 800px) {
          .host::before { content: 'Host: '; font-family: $smoo-default-font; font-weight: bold; }
          .ip::before { content: 'IPv4: '; font-family: $smoo-default-font; font-weight: bold; }
        }
        .host + br + .ip { opacity: 0.5; }
      }

      .td-port {
        font-family: monospace;
        &.default { opacity: 0.5; }
      }

      .td-location {
        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          > .flag-icon { margin-right: 0.5em; margin-top: -0.2em; }
        }
      }
    }

    @media (max-width: 800px) {
      td.td-location span.name { display: none; }
    }

    @media (max-width: 700px) {
      th.th-name { display: none; }
      td.td-name { display: none; }
    }

    @media (max-width: 550px) {
      th.th-version { display: none; }
      td.td-version { display: none; }
    }

    @media (max-width: 450px) {
      th.th-state { display: none; }
      td.td-state { display: none; }
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import CountryFlag from 'vue-country-flag'

import { IServer } from '@/types'
import SmooServerState from '@/components/SmooServerState.vue'

const linkTree = (branch, label) => '<a href="https://github.com/Sanae6/SmoOnlineServer/commits/' + branch + '" class="extern" target="_blank">' + (label || branch) + '</a>'
const packetFixes = linkTree('packet-fixes')
const latest = linkTree('master', 'latest')

@Component({
  components: {
    CountryFlag,
    SmooServerState,
  },
})
export default class Servers extends Vue {
  private defaultPort = 1027

  private fields = [
    {
      key     : 'state',
      tdClass : 'td-state',
      thClass : 'th-state',
    },
    {
      key           : 'name',
      tdClass       : 'td-name',
      thClass       : 'th-name',
      sortable      : true,
      sortDirection : 'asc',
    },
    {
      key     : 'server',
      tdClass : 'td-server',
      thClass : 'th-server',
    },
    {
      key             : 'port',
      tdClass         : (v, k, i) => 'td-port' + ((i.server.port || this.defaultPort) === this.defaultPort ? ' default' : ''),
      thClass         : 'th-port',
      sortable        : true,
      sortByFormatted : true,
      sortDirection   : 'asc',
      formatter       : (v, k, i) => i.server.port || this.defaultPort,
    },
    {
      key           : 'location',
      tdClass       : 'td-location',
      thClass       : 'th-location',
      sortable      : true,
      sortDirection : 'asc',
    },
    {
      key           : 'version',
      tdClass       : 'td-version',
      thClass       : 'th-version',
      sortable      : true,
      sortDirection : 'desc',
    },
  ]

  private servers : IServer[] = [
    {
      name     : 'Piplup',
      server   : { host: 'piplup.smoo.it', ip: '51.178.136.142' },
      location : { flag: 'fr', name: 'France' },
      state    : 'loading',
    },
    {
      name     : 'Piplup (Temp)',
      server   : { host: 'piplup.smoo.it', ip: '51.178.136.142', port: 1806 },
      location : { flag: 'fr', name: 'France' },
      version  : packetFixes,
      state    : 'loading',
    },
    {
      name     : 'Sanae',
      server   : { host: 'sanae.smoo.it', ip: '64.201.219.20' },
      location : { flag: 'ca', name: 'Canada' },
      state    : 'loading',
    },
    {
      name     : 'Parknich',
      server   : { host: 'parknich.smoo.it', ip: '51.81.86.202' },
      location : { flag: 'us', name: 'US-East' },
      state    : 'offline',
    },
    {
      name     : 'fruityloops',
      server   : { host: 'fruityloops.smoo.it', ip: '62.226.142.89' },
      location : { flag: 'de', name: 'Germany' },
      state    : 'loading',
    },
    {
      name     : 'f0c0s',
      server   : { host: 'f0c0s.smoo.it', ip: '94.130.25.137' },
      location : { flag: 'de', name: 'Germany' },
      state    : 'loading',
    },
    {
      name     : 'beni',
      server   : { host: 'beni.smoo.it', ip: '51.68.173.172' },
      location : { flag: 'de', name: 'Germany' },
      state    : 'unknown',
    },
    {
      name     : 'RCL',
      server   : { host: 'rcl.smoo.it' },
      location : { flag: 'de', name: 'Germany' },
      version  : latest,
      state    : 'online',
    },
    {
      name     : 'RCL',
      server   : { host: 'rcl.smoo.it', port: 1028 },
      location : { flag: 'de', name: 'Germany' },
      version  : packetFixes,
      state    : 'online',
    },
  ]
}
</script>
