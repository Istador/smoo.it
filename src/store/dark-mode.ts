import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators'

import { store, isset } from './index'

@Module({
  name          : 'dark-mode',
  store         : store,
  dynamic       : true,
  namespaced    : true,
  preserveState : isset('dark-mode'),
})
class XDarkMode extends VuexModule {
  enabled = false

  @Mutation
  setEnabled (enabled: boolean) {
    this.enabled = enabled
  }
}

export const DarkMode = getModule(XDarkMode)
export default DarkMode
