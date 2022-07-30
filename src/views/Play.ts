import { Vue, Component } from 'vue-property-decorator'

import PlaySwitch from './play/switch.vue'
import PlayRyujinx from './play/ryujinx.vue'
import PlayYuzu from './play/yuzu.vue'
import PlayHideAndSeek from './play/hide-and-seek.vue'

@Component({
  components: {
    PlayHideAndSeek,
    PlaySwitch,
    PlayRyujinx,
    PlayYuzu,
  },
})
export default class Play extends Vue {
  get id () : string {
    return this.$route.params.id || 'hide-and-seek'
  }
}
