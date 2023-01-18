import { Vue, Component } from 'vue-property-decorator'

import { kingdom2name } from '@/store/kingdoms'
import { Stages } from '@/store/xstages'

import SmooHint from '@/components/SmooHint.vue'

@Component({
  components: {
    SmooHint,
  },
})
export default class StagesKnownModal extends Vue {
  kingdoms = kingdom2name
  stages = Stages
}
