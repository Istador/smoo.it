import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence<unknown>({
  modules: [
    'dark-mode',
    'servers',
  ],
})

export const store = new Vuex.Store({
  plugins: [ vuexLocal.plugin ],
})

export const isset = (name: string) => (
  (localStorage.getItem('vuex') !== null)
  && (name in JSON.parse(localStorage.getItem('vuex') as string))
)

export const fetchy = async <T>(path: string): Promise<T> => {
  if (window.location.protocol === 'file:') {
    const res = await fetch('file://' + window.location.pathname.replace(/\/index\.html$/, '') + path)
    return await res.json() as T
  } else {
    const { data } = await axios.get(path, { timeout: 10000 }) // 10s
    return data as T
  }
}
