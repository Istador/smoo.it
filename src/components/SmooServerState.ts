import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import moment from 'moment'

import { IHost, ISettings } from '@/types'
import XServers, { getState, getResult } from '@/store/xservers'

@Component({})
export default class SmooServerState extends Vue {
  @Prop({ required: true, type: Object })
  server! : IHost

  @Prop({ required: false, type: Object, default: null })
  settings! : ISettings | null

  get state () { return getState(this.server) }
  get stamp () { return XServers.stamp }
  get result () { return getResult(this.server) }

  get currentSettings () : ISettings | null {
    return this.settings
  }

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
    const { state, stamp, currentSettings } = this
    const settings = []
    if (currentSettings) {
      const bool = (key: keyof ISettings) => {
        if (key in currentSettings) {
          const color = (currentSettings[key] ? 'text-success' : 'text-danger')
          settings.push(key + ': <span class="' + color + '">' + currentSettings[key] + '</span>')
        }
      }
      if ('MaxPlayers' in currentSettings) {
        settings.push('MaxPlayers: <span class="text-info">' + currentSettings.MaxPlayers + '</span>')
      }
      bool('ScenarioMerge')
      bool('PersistShines')
    }
    const stateColor = (state === 'online' ? 'text-success' : (state === 'offline' ? 'text-danger' : ''))
    return '<p>'
      + '<span class="' + stateColor + '">' + state + '</span>'
      + (state !== 'loading' && stamp ? ' - ' + moment(stamp).fromNow() : '')
      + '</p>'
      + (settings.length ? '<p>' + settings.join('<br/>') + '</p>' : '')
  }

  mounted () {
    this.onStateChange()
  }
}
