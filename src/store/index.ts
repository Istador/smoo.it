import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence<unknown>({})

export const store = new Vuex.Store({
  plugins: [ vuexLocal.plugin ],
})

export const isset = (name: string) => (
  (localStorage.getItem('vuex') !== null)
  && (name in JSON.parse(localStorage.getItem('vuex') as string))
)
