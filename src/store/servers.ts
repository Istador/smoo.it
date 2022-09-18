import { IServer } from '@/types'

const github = (repo = 'Sanae6/SmoOnlineServer') =>
  `https://github.com/${repo}/`
const externLink = (href: string, text: string) =>
  '<a href="' + href + '" class="extern" target="_blank">' + text + '</a>'
const linkRelease = (tag: string, label?: string, repo?: string) =>
  externLink(github(repo) + 'releases/tag/' + tag, label || tag)
const linkTree = (branch: string, label?: string, repo?: string) =>
  externLink(github(repo) + 'tree/' + branch, label || branch)

export const servers: IServer[] = [
  {
    name     : 'Piplup',
    link     : 'https://piplup.smoo.it',
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142' },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
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
    name     : 'F0C0S',
    server   : { host: 'f0c0s.smoo.it', ip: '94.130.25.137' },
    location : { flag: 'de', name: 'Germany' },
  },
  {
    name     : 'Beni',
    server   : { host: 'beni.smoo.it', ip: '51.68.173.172' },
    location : { flag: 'de', name: 'Germany' },
  },
  {
    name     : 'RCL 1',
    server   : { host: 'rcl.smoo.it' },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.4-rcl.1', 'rcl/1.0.4', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 6 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'RCL 2',
    server   : { host: 'rcl.smoo.it', port: 1028 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.3-rcl.2', 'rcl/1.0.3', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 6 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'RCL 3 (UDP)',
    server   : { host: 'rcl.smoo.it', port: 1029 },
    location : { flag: 'de', name: 'Germany' },
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: false },
      PersistShines : { Enabled: false },
    },
    version: {
      html    : linkTree('udp-json-api', 'rust/udp', 'Istador/smo-multi-rs'),
      details : `
        <p>Connecting requires a special SMOO ${linkTree('udp-client', 'mod version', 'speyejack/SuperMarioOdysseyOnline')} that speaks UDP.</p>
        <p>Alternatively you can run a proxy on your PC that splits the TCP stream for the normal mod (build it from the server source code).</p>
        <p class="text-secondary">Or you can connect to a proxy on port <code>1026</code>, but then there won't be any benefits from using UDP.</p>
      `,
    },
  },
  {
    name     : 'Krokilex',
    server   : { host: 'krokilex.smoo.it', ip: '37.16.29.245' },
    location : { flag: 'fr', name: 'France' },
    version  : linkRelease('0.3.0', 'rust/0.3.0', 'JulesGuesnon/smo-online-server'),
  },
  {
    name     : 'Jeff',
    server   : { host: 'jeff.smoo.it', ip: '172.105.137.146' },
    location : { flag: 'us', name: 'US-East' },
    version  : {
      html    : linkTree('master', 'proximity/1.0.1', 'TheUbMunster/SmoOnlineServer'),
      details : `
        The Proximity Voice Chat (PVC) client requires additional settings:
        <ul>
          <li>PVC Port: <code>12000</code></li>
          <li>Discord Application ID: <code>1011047390133899324</code></li>
        </ul>
      `,
    },
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
