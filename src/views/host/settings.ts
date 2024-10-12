import { Vue, Component } from 'vue-property-decorator'

import StagesKnownModal from './commands/stages-known-modal.vue'

@Component({
  components: {
    StagesKnownModal,
  },
})
export default class HostSettings extends Vue {
}
