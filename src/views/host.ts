import { Vue, Component } from 'vue-property-decorator'

import HostBinary from './host/binary.vue'
import HostDocker from './host/docker.vue'
import HostSettings from './host/settings.vue'
import HostCommands from './host/commands.vue'
import HostDiscord from './host/discord.vue'
import HostRouter from './host/router.vue'
import HostVpn from './host/vpn.vue'
import HostRemote from './host/remote.vue'

@Component({
  components: {
    HostBinary,
    HostDocker,
    HostSettings,
    HostCommands,
    HostDiscord,
    HostRouter,
    HostVpn,
    HostRemote,
  },
})
export default class Host extends Vue {
  get id () : string {
    return this.$route.params.id || 'binary'
  }
}
