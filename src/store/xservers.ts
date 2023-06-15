import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

import axios from 'axios'

import { store, isset } from './index'
import { IHost, TState, ISettings, IPlayer } from '@/types'

export interface Details {
  Settings : ISettings
  Players  : IPlayer[]
}

export interface Server {
  stamp : string
  host  : string
  port  : number
  ipv4  : string
  state : Details | boolean
}

export interface Servers {
  [key: string]: Server | Details | boolean
}

export interface Result {
  stamp   : string
  servers : Servers
}

let firstStart = true

@Module({
  name          : 'servers',
  store         : store,
  dynamic       : true,
  namespaced    : true,
  preserveState : isset('servers'),
})
class XServers extends VuexModule {
  loading = false
  initialized = false
  result : Result | null = null
  error : Error | null = null
  date : number | null = null

  get stamp () : string | null {
    if (!this.initialized) { return null }
    if (!this.result || !this.result.stamp) { return null }
    return this.result.stamp
  }

  @Mutation
  startLoading () {
    this.loading = true
  }

  @Mutation
  loaded (result: Result) {
    this.result = result
    this.initialized = true
    this.loading = false
    this.error = null
    this.date = Date.now()
  }

  @Mutation
  failed (error: Error) {
    this.error = error
    this.loading = false
    this.date = Date.now()
  }

  @Action
  async load () {
    this.startLoading()
    try {
      const { data } = await axios.get(
        'https://api.smoo.it/servers.json',
        {
          timeout: 10000, // 10s
        },
      )
      this.loaded(data)
    } catch (error) {
      console.error(error)
      this.failed(error as Error)
    }
  }

  @Action
  refetch () {
    // don't get stuck in an infinite loading state, in cases where loading = true was saved to the local storage
    if (firstStart) {
      if (this.loading) {
        this.failed(Error('loading = true was saved, reset loading state manually'))
      }
      firstStart = false
    }

    if (this.loading) { return }
    if (this.initialized && this.date) {
      const ms = Date.now() - this.date
      if (ms < 1 * 60 * 1000) { return } // 1m
    }
    this.load()
    return this
  }
}

const Servers = getModule(XServers)
export default Servers

export function getResult ({ ip = '', host = ip, port = 1027 }: IHost = {}) : Details | boolean | null {
  const { initialized, result } = Servers
  if (!initialized) { return null }
  if (!result) { return null }
  if (!result.servers) { return null }

  const key = host + ':' + port
  const server = result.servers[key] ?? null
  if (server === null) { return null }
  if (typeof server === 'boolean') { return server }
  return ('state' in server ? server.state : server)
}

export function getIPv4 ({ ip = '', host = ip, port = 1027 }: IHost = {}) : string | null {
  const { initialized, result } = Servers
  if (!initialized) { return null }
  if (!result) { return null }
  if (!result.servers) { return null }

  const key = host + ':' + port
  const server = result.servers[key] ?? null
  if (server === null) { return null }
  if (typeof server === 'boolean') { return null }
  return ('ipv4' in server ? server.ipv4 : null)
}

export function getStamp ({ ip = '', host = ip, port = 1027 }: IHost = {}) : string | null {
  const { initialized, result } = Servers
  if (!initialized) { return null }
  if (!result) { return null }
  if (!result.servers) { return null }

  const key = host + ':' + port
  const server = result.servers[key] ?? null
  if (server === null) { return null }
  if (typeof server === 'boolean') { return result.stamp ?? null }
  return ('stamp' in server ? server.stamp : result.stamp ?? null)
}

export function getState ({ ip = '', host = ip, port = 1027 }: IHost = {}, canBeDead = false) : TState {
  const { loading } = Servers
  if (loading) { return 'loading' }

  const result = getResult({ ip, host, port })
  if (result === null) { return (canBeDead ? 'dead' : 'unknown') }
  if (typeof result === 'object') { return 'online' }
  if (typeof result !== 'boolean') { return 'unknown' }
  if (!result && canBeDead) { return 'dead' }
  return (result ? 'online' : 'offline')
}
