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
    if (this.state === 'loading') { return 'arrow-clockwise' }
    if (this.state === 'unknown') { return 'circle' }
    if (this.tooOld) { return 'circle' }
    return 'circle-fill'
  }

  get animation () : string {
    return (this.state === 'loading' ? 'spin' : '')
  }

  get tooOld () : boolean {
    if (!XServers.date) { return true }
    return moment().diff(XServers.stamp, 'minutes') > 60
  }

  @Watch('state')
  onStateChange () {
    if (this.state !== 'loading') {
      this.$emit('state', this.state)
    }
  }

  title () {
    return this.state +
      (this.state !== 'loading' && this.stamp ? ' - ' + moment(this.stamp).fromNow() : '')
  }

  mounted () {
    this.onStateChange()
  }
}
