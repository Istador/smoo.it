import { Vue, Component } from 'vue-property-decorator'

import MoonsModal from './commands/moons-modal.vue'
import ScenariosModal from './commands/scenarios-modal.vue'
import StagesAliasModal from './commands/stages-alias-modal.vue'
import StagesKnownModal from './commands/stages-known-modal.vue'

@Component({
  components: {
    MoonsModal,
    ScenariosModal,
    StagesAliasModal,
    StagesKnownModal,
  },
})
export default class HostCommands extends Vue {
}
