import { Vue, Component } from 'vue-property-decorator'
import { Next } from 'vue-router'

import CountryFlag from 'vue-country-flag'

import { IHost, IServer } from '@/types'
import SmooServerState from '@/components/SmooServerState.vue'

import { servers } from '@/store/servers'
import XServers, { getIPv4 } from '@/store/xservers'

const stateFormatter = (_v: null, _k: string, i: IServer): number => {
  switch (i.server.state || '') {
  case 'online': return 0
  case 'unknown': return 1
  case 'offline': return 2
  case 'dead': return 3
  default: return 2
  }
}

@Component({
  components: {
    CountryFlag,
    SmooServerState,
  },
  beforeRouteEnter (_to, _from, next: Next<Servers, void>) {
    next((self) => {
      XServers.refetch()
      self.interval = setInterval(
        () => XServers.refetch(),
        15000, // 15s
      )
    })
  },
  beforeRouteLeave (this: Servers, _to, _from, next) {
    clearInterval(this.interval)
    next()
  },
})
export default class Servers extends Vue {
  defaultPort = 1027
  servers = servers
  interval = 0
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
      key             : 'server',
      tdClass         : 'td-server',
      thClass         : 'th-server',
      sortable        : true,
      sortByFormatted : true,
      sortDirection   : 'asc',
      formatter       : (_v: null, _k: string, i: IServer) => (
        (i.server.host || i.server.ip || '')
        + ';'
        + (i.name || '')
        + ';'
        + (i.server.port || this.defaultPort)
      ),
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

  getIPv4 ({ host, port, ip }: IHost) {
    const ipv4 = getIPv4({ host, port })
    return (ip || ipv4 ? 'IPv4: <code>' + (ip || ipv4) + '</code>' + (ip ? '' : ' (dynamic)') : '')
      + (ip && ipv4 && ip !== ipv4 ? '<br/>Changed to <code>' + ipv4 + '</code>?' : '')
  }
}
