import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

import axios from 'axios'

import { store, isset } from './index'
import { IHost, TState, ISettings, IPlayer } from '@/types'

export interface Details {
  Settings : ISettings
  Players  : IPlayer[]
}

export interface Servers {
  [key: string]: Details | boolean
}

export interface Result {
  stamp   : string
  servers : Servers
}

@Module({
  name          : 'servers',
  store         : store,
  dynamic       : true,
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
    if (this.loading) { return }
    if (this.initialized && this.date) {
      const ms = Date.now() - this.date
      if (ms < 3 * 60 * 1000) { return } // 3m
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
  return result.servers[key] ?? null
}

export function getState ({ ip = '', host = ip, port = 1027 }: IHost = {}) : TState {
  const { loading } = Servers
  if (loading) { return 'loading' }

  const result = getResult({ ip, host, port })
  if (result === null) { return 'unknown' }
  if (typeof result === 'object') { return 'online' }
  if (typeof result !== 'boolean') { return 'unknown' }
  return (result ? 'online' : 'offline')
}
