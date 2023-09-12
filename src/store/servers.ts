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
    name     : 'Piplup (Main)',
    link     : 'https://piplup.smoo.it',
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142' },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (Capture Sync)',
    link     : 'https://piplup.smoo.it',
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142', port: 1028 },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Sanae',
    server   : { host: 'sanae.smoo.it', ip: '64.201.219.20' },
    location : { flag: 'ca', name: 'Canada' },
    settings : {
      Server: { MaxPlayers: 13 },
    },
  },
  {
    dead     : true,
    name     : 'F0C0S',
    server   : { host: 'f0c0s.smoo.it', ip: '94.130.25.137' },
    location : { flag: 'de', name: 'Germany' },
  },
  {
    dead     : true,
    name     : 'Parknich',
    server   : { host: 'parknich.smoo.it', ip: '51.81.86.202' },
    location : { flag: 'us', name: 'US-East' },
  },
  {
    dead     : true,
    name     : 'Yann',
    server   : { host: 'yann.smoo.it', ip: '141.145.216.231' },
    location : { flag: 'fr', name: 'France' },
    settings : {
      Server: { MaxPlayers: 8 },
    },
  },
  {
    name     : 'RCL 1',
    server   : { host: 'rcl.smoo.it' },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.4-rcl.9', 'rcl/1.0.4', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 6 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'RCL 2',
    server   : { host: 'rcl.smoo.it', port: 1028 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.4-rcl.9', 'rcl/1.0.4', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 6 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'RCL 3 (UDP)',
    server   : { host: 'rcl.smoo.it', port: 1029 },
    location : { flag: 'de', name: 'Germany' },
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
    version: {
      html    : linkTree('udp-json-api', 'rust/udp', 'Istador/smo-multi-rs'),
      details : `
        <p>Connecting requires the latest ${linkRelease('latest-dev', 'dev-build', 'CraftyBoss/SuperMarioOdysseyOnline')} from <code>2023-09-11</code> or later.</p>
      `,
    },
  },
  {
    name     : 'Krokilex',
    server   : { host: 'krokilex.smoo.it', ip: '37.16.29.245' },
    location : { flag: 'fr', name: 'France' },
    version  : linkRelease('0.3.0', 'rust/0.3.0', 'JulesGuesnon/smo-online-server'),
    settings : {
      Server: { MaxPlayers: 8 },
    },
  },
  {
    dead     : true,
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
    settings: {
      Server: { MaxPlayers: 6 },
    },
  },
  {
    name     : 'Ninunity Online',
    server   : { host: 'ninunity.smoo.it', ip: '209.25.141.180', port: 62102 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.3'),
    settings : {
      Server        : { MaxPlayers: 16 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
