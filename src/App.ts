import { Vue, Component } from 'vue-property-decorator'
import SmooHeader from './components/SmooHeader.vue'
import SmooFooter from './components/SmooFooter.vue'

@Component({
  components: {
    SmooHeader,
    SmooFooter,
  },
})
export default class State extends Vue {
}
