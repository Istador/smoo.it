import { Vue, Component } from 'vue-property-decorator'

import PlayHideAndSeek from './play/hide-and-seek.vue'
import PlaySwitch from './play/switch.vue'
import PlayRyujinx from './play/ryujinx.vue'
import PlayBuild from './play/build.vue'

@Component({
  components: {
    PlayHideAndSeek,
    PlaySwitch,
    PlayRyujinx,
    PlayBuild,
  },
})
export default class Play extends Vue {
  get id () : string {
    return this.$route.params.id || ''
  }

  show (id: string) {
    if (id === this.id) { return }
    this.$router.replace({ name: 'play', params: { id } })
  }

  hidden (id: string) {
    if (id !== this.id) { return }
    if (!this.$route.params.id) { return }
    this.$router.replace({ name: 'play' })
  }
}
