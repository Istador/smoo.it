import { IServer } from '@/types'

const github = 'https://github.com/Sanae6/SmoOnlineServer/'
const externLink = (href: string, text: string) => '<a href="' + href + '" class="extern" target="_blank">' + text + '</a>'
const linkRelease = (tag: string, label?: string) => externLink(github + 'releases/tag/' + tag, (label || tag))
const linkTree = (branch: string, label?: string) => externLink(github + 'commits/' + branch, (label || branch))

export const servers : IServer[] = [
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
    name     : 'Fruityloops',
    server   : { host: 'fruityloops.smoo.it', ip: '62.226.142.89' },
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
].map((s: IServer) => { s.server.state = null; return s })
