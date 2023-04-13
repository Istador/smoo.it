import Vue from 'vue'

// IE11 backward compatibility for Proxy that fontawesome is using.
import 'proxy-polyfill'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'
library.add(faSkull)
library.add(faLinux)
library.add(faWindows)
Vue.component('font-awesome-icon', FontAwesomeIcon)
