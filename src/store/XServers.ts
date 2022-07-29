import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

import axios from 'axios'

import { store } from './index'
import { IHost, TState } from '@/types'

interface Servers {
  [key: string]: boolean
}

interface Result {
  stamp   : string
  servers : Servers
}

@Module({
  name          : 'servers',
  store         : store,
  dynamic       : true,
  preserveState : localStorage.getItem('vuex') !== null,
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

const module = getModule(XServers)
export default module

export function getState ({ ip = '', host = ip, port = 1027 }: IHost = {}) : TState {
  const { loading, initialized, result } = module
  if (loading) { return 'loading' }
  if (!initialized) { return 'unknown' }
  if (!result) { return 'unknown' }
  if (!result.servers) { return 'unknown' }

  const key = host + ':' + port

  if (typeof result.servers[key] !== 'boolean') { return 'unknown' }
  return (result.servers[key] ? 'online' : 'offline')
}
