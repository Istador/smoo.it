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
    server   : { host: 'piplup.smoo.it', ip: '143.198.241.242' },
    location : { flag: 'gb', name: 'United Kingdom' },
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
    server   : { host: 'piplup.smoo.it', ip: '143.198.241.242', port: 1028 },
    location : { flag: 'gb', name: 'United Kingdom' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    dead     : true,
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
    name     : 'Sleepyy',
    server   : { host: 'sleepyy.smoo.it', ip: '141.94.109.19' },
    location : { flag: 'fr', name: 'France' },
    settings : {
      Server: { MaxPlayers: 6 },
    },
  },
  {
    dead     : true,
    name     : 'Parknich',
    server   : { host: 'parknich.smoo.it', ip: '51.81.86.202' },
    location : { flag: 'us', name: 'US-East' },
  },
  {
    dead     : true,
    name     : 'Rocket',
    server   : { host: 'rocket.smoo.it', ip: '71.34.227.68', port: 1027 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkRelease('1.0.4'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'RCL 1 (H&S)',
    server   : { host: 'rcl.smoo.it' },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.5-rcl.4', 'rcl/1.0.5', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 6 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: false, ClearOnNewSaves: false },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'RCL 2 (100%)',
    server   : { host: 'rcl.smoo.it', port: 1028 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.5-rcl.4', 'rcl/1.0.5', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 6 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true, ClearOnNewSaves: false },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'RCL 3 (Co-Op)',
    server   : { host: 'rcl.smoo.it', port: 1029 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.5-rcl.4', 'rcl/1.0.5', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 6 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true, ClearOnNewSaves: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'RCL 4 (UDP)',
    server   : { host: 'rcl.smoo.it', port: 1030 },
    location : { flag: 'de', name: 'Germany' },
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: false, ClearOnNewSaves: false },
      PersistShines : { Enabled: false },
    },
    version: {
      html    : linkRelease('1.0.5-rcl.1', 'udp/1.0.5', 'Istador/smo-multi-rs'),
      details : `
        <p>Connecting requires mod version ${linkRelease('v1.4.0', 'v1.4.0', 'CraftyBoss/SuperMarioOdysseyOnline')} or later.</p>
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
    name     : 'Snafty',
    server   : { host: 'snafty.smoo.it', ip: '209.25.141.180', port: 62102 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.3'),
    settings : {
      Server        : { MaxPlayers: 16 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: false },
    },
 },	
 {
    name     : 'Luwuna (H&S)',
    server   : { host: 'luwuna.smoo.it', ip: '5.180.182.219', port:1027 },
    location : { flag: 'nl', name: 'Netherlands' },
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: false },
    },
 },
 {
    name     : 'Luwuna (Versus 01)',
    server   : { host: 'luwuna.smoo.it', ip: '5.180.182.219', port:1028 },
    location : { flag: 'nl', name: 'Netherlands' },
    settings : {
      Server        : { MaxPlayers: 4 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'Luwuna (Versus 02)',
    server   : { host: 'luwuna.smoo.it', ip: '5.180.182.219', port:1029 },
    location : { flag: 'nl', name: 'Netherlands' },
    settings : {
      Server        : { MaxPlayers: 4 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
