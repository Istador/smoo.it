import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import SmooBtn from '@/components/SmooBtn.vue'

Vue.config.productionTip = false

Vue.component('SmooBtn', SmooBtn)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
