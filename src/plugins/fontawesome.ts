import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
library.add(faSkull)
Vue.component('font-awesome-icon', FontAwesomeIcon)
