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
    server   : { host: 'piplup.smoo.it', ip: '87.106.63.108' },
    location : { flag: 'gb', name: 'United Kingdom' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (Capture Sync)',
    link     : 'https://piplup.smoo.it',
    server   : { host: 'piplup.smoo.it', ip: '87.106.63.108', port: 1028 },
    location : { flag: 'gb', name: 'United Kingdom' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Kamrons Public (H&S)',
    server   : { host: 'kamron.smoo.it', ip: '66.220.29.106', port: 1027 },
    location : { flag: 'us', name: 'US-West' },
    version  : linkTree('master', 'Sanae6/master', 'Sanae6/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Muz',
    server   : { host: 'muz.smoo.it', ip: '49.13.203.68' },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.5-rcl.8', 'rcl/1.0.5', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 12 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
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
    name     : 'Colbster937',
    server   : { host: 'colbster.smoo.it', ip: '5.183.8.27', port: 1027 },
    location : { flag: 'us', name: 'US-Central' },
    settings : {
      Server: { MaxPlayers: 8 },
    },
  },
  {
    name     : 'SchweGELBin',
    server   : { host: 'schwegelbin.smoo.it', ip: '79.76.110.71', port: 1027 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkTree('main', 'SchweGELBin/smoos-cs', 'SchweGELBin/smoos'),
    settings : {
      Server: { MaxPlayers: 8 },
    },
  },
  {
    name     : 'Skylanderfree',
    server   : { host: 'skylanderfree.smoo.it', ip: '159.223.184.153', port: 1027 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkTree('main', 'LunaBroeke/main', 'LunaBroeke/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'Skylanderfree (Co-Op)',
    server   : { host: 'skylanderfree.smoo.it', ip: '159.223.184.153', port: 1028 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkTree('main', 'LunaBroeke/main', 'LunaBroeke/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 12 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true, ClearOnNewSaves: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Hyper (Main)',
    server   : { host: 'hyperwg.smoo.it', ip: '187.124.145.118', port: 1027 },
    location : { flag: 'us', name: 'US-East' },
    version  : linkRelease('1.0.5-rcl.10', 'rcl/1.0.5', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Hyper (Alt)',
    server   : { host: 'hyperwg.smoo.it', ip: '187.124.145.118', port: 1028 },
    location : { flag: 'us', name: 'US-East' },
    version  : linkRelease('1.0.5-rcl.10', 'rcl/1.0.5', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 12 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Hyper (Co-op)',
    server   : { host: 'hyperwg.smoo.it', ip: '187.124.145.118', port: 1029 },
    location : { flag: 'us', name: 'US-East' },
    version  : linkRelease('1.0.5-rcl.10', 'rcl/1.0.5', 'Istador/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 12 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true, ClearOnNewSaves: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : '2Fast (H&S)',
    server   : { host: '2fast.smoo.it', ip: '74.208.191.249', port: 1027 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkTree('master', 'Sanae6/master', 'Sanae6/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : '2Fast (Capture Sync)',
    server   : { host: '2fast.smoo.it', ip: '74.208.191.249', port: 1028 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkTree('master', 'Sanae6/master', 'Sanae6/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : '2Fast (Co-op)',
    server   : { host: '2fast.smoo.it', ip: '74.208.191.249', port: 1029 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkTree('master', 'Sanae6/master', 'Sanae6/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 12 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true, ClearOnNewSaves: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Taranza',
    server   : { host: 'Taranza.smoo.it', ip: '192.168.1.13', port: 2012 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkTree('master', 'Sanae6/master', 'Sanea6/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true, ClearOnNewSaves: true },
      PersistShines : { Enabled: true },
    },
  }, 
].map((s: IServer) => {
  s.server.state = null
  return s
})
