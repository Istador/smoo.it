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
    name     : 'Fruityloops',
    server   : { host: 'fruityloops.smoo.it', ip: '80.138.131.1' },
    location : { flag: 'de', name: 'Germany' },
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
    name     : 'Joe',
    server   : { host: 'joe.smoo.it' },
    location : { flag: 'ca', name: 'Canada' },
    version  : linkRelease('1.0.2'),
  },
  {
    name     : 'Jonah',
    server   : { host: 'jonah.smoo.it', ip: '172.104.198.34' },
    location : { flag: 'us', name: 'US-East' },
    version  : linkRelease('1.0.2'),
  },
  {
    name     : 'RCL 1',
    server   : { host: 'rcl.smoo.it' },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.2'),
  },
  {
    name     : 'RCL 2',
    server   : { host: 'rcl.smoo.it', port: 1028 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkTree('packet-fixes'),
  },
  {
    name     : 'Krokilex',
    server   : { host: 'krokilex.smoo.it', ip: '37.16.29.245' },
    location : { flag: 'fr', name: 'France' },
    version  : linkRelease('0.3.0', 'rust/0.3.0', 'JulesGuesnon/smo-online-server'),
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
