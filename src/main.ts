import Vue from 'vue'

import '@babel/polyfill'
import 'mutationobserver-shim'

import App from '@/App.vue'
import { router } from '@/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
