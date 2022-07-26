import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import moment from 'moment'

import { IHost, ISettings, IPlayer } from '@/types'
import XServers, { getState, getResult } from '@/store/xservers'

import { stages } from '@/views/host/commands'

@Component({})
export default class SmooServerState extends Vue {
  @Prop({ required: true, type: String })
  name! : string

  @Prop({ required: true, type: Object })
  server! : IHost

  @Prop({ required: false, type: Object, default: null })
  settings! : ISettings | null

  stages = stages

  get state () { return getState(this.server) }
  get stamp () { return XServers.stamp }
  get result () { return getResult(this.server) }

  get currentSettings () : ISettings | null {
    return (typeof this.result === 'object' && this.result?.Settings) || this.settings
  }

  get MaxPlayers () : number | null {
    return this.currentSettings?.Server?.MaxPlayers ?? null
  }

  get players () : IPlayer[] | null {
    if (!this.result) { return null }
    if (typeof this.result !== 'object') { return null }
    if (!this.result.Players) { return null }
    return this.result.Players
  }

  get playersVisible () : boolean {
    if (!this.players) { return false }
    if (!this.players.length) { return false }
    return this.players.some(x => Object.keys(x).length)
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
    const { state, stamp, currentSettings, players } = this
    const settings = []
    if (currentSettings) {
      const bool = (name: string, key: keyof ISettings, field: string) => {
        if (key in currentSettings) {
          const sub : { [key: string]: number | boolean | undefined } = currentSettings[key] ?? {}
          const value = sub[field] ?? null
          if (value !== null) {
            const color = (value ? 'text-success' : 'text-danger')
            settings.push(name + ': <span class="' + color + '">' + value + '</span>')
          }
        }
      }
      if (!(players === null && this.MaxPlayers === null)) {
        const playersKey = (players ? 'Players' : 'MaxPlayers')
        const playersColor = (players ? (players.length !== this.MaxPlayers ? 'text-success' : 'text-danger') : 'text-info')
        const playersValue = (players ? players.length : '') + (players && this.MaxPlayers ? ' / ' : '') + (this.MaxPlayers ?? '')
        settings.push(playersKey + ': <span class="' + playersColor + '">' + playersValue + '</span>')
      }
      bool('ScenarioMerge', 'Scenario', 'MergeEnabled')
      bool('ShineSync', 'Shines', 'Enabled')
      bool('PersistShines', 'PersistShines', 'Enabled')
    }
    const stateColor = (state === 'online' ? 'text-success' : (state === 'offline' ? 'text-danger' : ''))
    return '<p>'
      + '<span class="' + stateColor + '">' + state + '</span>'
      + (state !== 'loading' && stamp ? ' &bull; ' + moment(stamp).fromNow() : '')
      + '</p>'
      + (settings.length ? '<p>' + settings.join('<br/>') + '</p>' : '')
  }

  mounted () {
    this.onStateChange()
  }
}
