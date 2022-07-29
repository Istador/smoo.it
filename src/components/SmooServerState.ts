import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import moment from 'moment'

import { IHost } from '@/types'
import XServers, { getState } from '@/store/XServers'

@Component({})
export default class SmooServerState extends Vue {
  @Prop({ required: true, type: Object })
  server! : IHost

  get state () { return getState(this.server) }
  get stamp () { return XServers.stamp }

  get icon () : string {
    switch (this.state) {
    case 'loading': return 'arrow-clockwise'
    case 'unknown': return 'circle'
    default: return 'circle-fill'
    }
  }

  get animation () : string {
    return (this.state === 'loading' ? 'spin' : '')
  }

  @Watch('state')
  onStateChange () {
    if (this.state !== 'loading') {
      this.$emit('state', this.state)
    }
  }

  title () {
    return this.state + (this.stamp ? ' - ' + moment(this.stamp).fromNow() : '')
  }

  mounted () {
    this.onStateChange()
  }
}
