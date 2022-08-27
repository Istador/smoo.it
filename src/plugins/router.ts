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

const isVisible = (el: Element) => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

interface PositionResult {
  selector : string,
  behavior : 'smooth'
}

const scrollTo = (id: string): PositionResult => {
  const selector = '#scroll-' + id
  const element = document.querySelector(selector + ' > header')
  if (!element || isVisible(element)) { return {} as PositionResult }
  return {
    selector : selector,
    behavior : 'smooth',
  }
}

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to) {
    if (!to.name || !to.params.id) { return null }
    return new Promise((resolve) => {
      setTimeout(() => resolve(scrollTo(to.params.id)), 500)
    })
  },
})

export default router
