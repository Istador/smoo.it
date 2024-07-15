import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

import { store, fetchy } from './index'

import { TKingdom } from '@/store/kingdoms'

export interface TKingdomMoon {
  id             : number
  name           : string

  stage          : string
  subStage?      : string

  story?         : boolean
  multi?         : boolean
  boss?          : boolean
  changeStageTo? : number

  extra?         : boolean
  hintart?       : boolean
  toadette?      : string
}

export type TKingdomMoons = { [key: string]: TKingdomMoon }

export type Result = {
  [key in TKingdom]: TKingdomMoons
}

@Module({
  name          : 'moons',
  store         : store,
  dynamic       : true,
  namespaced    : true,
  preserveState : false,
})
class XMoons extends VuexModule {
  loading = false
  initialized = false
  result : Result | null = null
  error : Error | null = null

  @Mutation
  startLoading () {
    this.loading = true
  }

  @Mutation
  loaded (result: Result) {
    this.result = result
    this.initialized = true
    this.loading = false
  }

  @Mutation
  failed (error: Error) {
    this.error = error
    this.loading = false
  }

  @Action
  async load () {
    this.startLoading()
    try {
      const data = await fetchy<Result>('/data/moons.json')
      this.loaded(data)
    } catch (error) {
      console.error(error)
      this.failed(error as Error)
    }
  }

  @Action
  fetch () {
    if (this.loading) { return }
    if (this.initialized) { return }
    this.load()
    return this
  }
}

export const Moons = getModule(XMoons)
export default Moons
