import { Vue, Component } from 'vue-property-decorator'

import CountryFlag from 'vue-country-flag'

import { IServer } from '@/types'
import SmooServerState from '@/components/SmooServerState.vue'

const github = 'https://github.com/Sanae6/SmoOnlineServer/'
const externLink = (href: string, text: string) => '<a href="' + href + '" class="extern" target="_blank">' + text + '</a>'
const linkRelease = (tag: string, label?: string) => externLink(github + 'releases/tag/' + tag, (label || tag))
const linkTree = (branch: string, label?: string) => externLink(github + 'commits/' + branch, (label || branch))

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
      tdClass         : (_v: null, _k: string, i: IServer) => 'td-port' + ((i.server.port || this.defaultPort) === this.defaultPort ? ' default' : ''),
      thClass         : 'th-port',
      sortable        : true,
      sortByFormatted : true,
      sortDirection   : 'asc',
      formatter       : (_v: null, _k: string, i: IServer) => i.server.port || this.defaultPort,
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
    },
    {
      name     : 'Piplup (Temp)',
      server   : { host: 'piplup.smoo.it', ip: '51.178.136.142', port: 1806 },
      location : { flag: 'fr', name: 'France' },
      version  : linkTree('packet-fixes'),
    },
    {
      name     : 'Sanae',
      server   : { host: 'sanae.smoo.it', ip: '64.201.219.20' },
      location : { flag: 'ca', name: 'Canada' },
    },
    {
      name     : 'Parknich',
      server   : { host: 'parknich.smoo.it', ip: '51.81.86.202' },
      location : { flag: 'us', name: 'US-East' },
    },
    {
      name     : 'fruityloops',
      server   : { host: 'fruityloops.smoo.it', ip: '62.226.142.89' },
      location : { flag: 'de', name: 'Germany' },
    },
    {
      name     : 'f0c0s',
      server   : { host: 'f0c0s.smoo.it', ip: '94.130.25.137' },
      location : { flag: 'de', name: 'Germany' },
    },
    {
      name     : 'beni',
      server   : { host: 'beni.smoo.it', ip: '51.68.173.172' },
      location : { flag: 'de', name: 'Germany' },
    },
    {
      name     : 'RCL',
      server   : { host: 'rcl.smoo.it' },
      location : { flag: 'de', name: 'Germany' },
      version  : linkRelease('1.0.2', '1.1.0'),
    },
    {
      name     : 'RCL',
      server   : { host: 'rcl.smoo.it', port: 1028 },
      location : { flag: 'de', name: 'Germany' },
      version  : linkTree('packet-fixes'),
    },
  ]
}
