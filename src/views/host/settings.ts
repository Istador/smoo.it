import { Vue, Component } from 'vue-property-decorator'

import MoonsModal from './commands/moons-modal.vue'
import StagesKnownModal from './commands/stages-known-modal.vue'

@Component({
  components: {
    MoonsModal,
    StagesKnownModal,
  },
})
export default class HostSettings extends Vue {
}
