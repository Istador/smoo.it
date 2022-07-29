import { Vue, Component } from 'vue-property-decorator'

import CountryFlag from 'vue-country-flag'

import { IServer } from '@/types'
import SmooServerState from '@/components/SmooServerState.vue'

import { servers } from '@/store/servers'

const stateFormatter = (_v: null, _k: string, i: IServer): number => {
  switch (i.server.state || '') {
  case 'online': return 0
  case 'unknown': return 1
  case 'offline': default: return 2
  }
}

@Component({
  components: {
    CountryFlag,
    SmooServerState,
  },
})
export default class Servers extends Vue {
  defaultPort = 1027
  servers = servers
  fields = [
    {
      key             : 'state',
      tdClass         : 'td-state',
      thClass         : 'th-state',
      sortable        : true,
      sortByFormatted : true,
      sortDirection   : 'asc',
      formatter       : stateFormatter,
    },
    {
      key           : 'name',
      tdClass       : 'td-name',
      thClass       : 'th-name',
      sortable      : true,
      sortDirection : 'asc',
    },
    {
      key             : 'server',
      tdClass         : 'td-server',
      thClass         : 'th-server',
      sortable        : true,
      sortByFormatted : true,
      sortDirection   : 'asc',
      formatter       : (_v: null, _k: string, i: IServer) => i.server.host || i.server.ip || '',
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
}
