import Vue from 'vue'

import 'mutationobserver-shim'

import App from '@/app.vue'
import { store } from '@/store'
import { router } from '@/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
