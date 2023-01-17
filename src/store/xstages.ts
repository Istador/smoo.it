import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

import { store, fetchy } from './index'

import { TKingdom } from '@/store/kingdoms'

export interface TKingdomStage {
  name     : string,
  subarea? : boolean | 'shiveria' | 'deep' | 'boss'
  top?     : boolean
  left?    : boolean
  cell?    : string
  extra?   : boolean
}

export type TKingdomStages = { [key: string]: TKingdomStage }

export type Result = {
  [key in TKingdom|'all']: TKingdomStages
}

@Module({
  name          : 'stages',
  store         : store,
  dynamic       : true,
  namespaced    : true,
  preserveState : false,
})
class XStages extends VuexModule {
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
      const data = await fetchy<Result>('/data/stages.json')
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

export const Stages = getModule(XStages)
export default Stages
