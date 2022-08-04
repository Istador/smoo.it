import { Vue, Component } from 'vue-property-decorator'
import SmooHeader from './components/SmooHeader.vue'
import SmooFooter from './components/SmooFooter.vue'

import Home from './views/Home.vue'

@Component({
  components: {
    Home,
    SmooHeader,
    SmooFooter,
  },
})
export default class State extends Vue {
}
