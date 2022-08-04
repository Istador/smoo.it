import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Play from '@/views/play.vue'
import Host from '@/views/host.vue'
import Servers from '@/views/servers.vue'
import FAQ from '@/views/faq.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name : 'home',
    path : '/',
  },
  {
    name      : 'play',
    path      : '/play/:id?',
    component : Play,
  },
  {
    name      : 'host',
    path      : '/host/:id?',
    component : Host,
  },
  {
    name      : 'servers',
    path      : '/servers',
    component : Servers,
  },
  {
    name      : 'faq',
    path      : '/faq/:id?',
    component : FAQ,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
