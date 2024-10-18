import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import moment from 'moment'

import { GameMode, IHost, ISettings, IPlayer } from '@/types'
import { getResult, getStamp, getState } from '@/store/xservers'

import { captures } from '@/store/captures'
import { costumes } from '@/store/costumes'
import { kingdom2name, TKingdom } from '@/store/kingdoms'
import { Stages } from '@/store/xstages'

@Component({})
export default class SmooServerState extends Vue {
  @Prop({ required: true, type: String })
  name! : string

  @Prop({ required: true, type: Object })
  server! : IHost

  @Prop({ required: false, type: Boolean, default: false })
  canBeDead! : boolean

  @Prop({ required: false, type: Object, default: null })
  settings! : ISettings | null

  kingdoms = kingdom2name
  stages = Stages
  captures = captures
  costumes = costumes

  get state () { return getState(this.server, this.canBeDead) }
  get stamp () { return getStamp(this.server) }
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
    if (this.state === 'dead') { return 'skull' }
    return 'circle-fill'
  }

  get animation () : string {
    return (this.state === 'loading' ? 'spin' : '')
  }

  get tooOld () : boolean {
    if (!this.stamp) { return true }
    return moment().diff(this.stamp, 'minutes') > 60
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
        const playersValue = (players ? players.length : '') + (players && this.MaxPlayers != null ? ' / ' : '') + (this.MaxPlayers ?? '')
        settings.push(playersKey + ': <span class="' + playersColor + '">' + playersValue + '</span>')
        if (8 < (this.MaxPlayers ?? 0)) {
          settings.push('CaptureSync: <span class="text-danger">false</span>')
        } else if (7 < (this.MaxPlayers ?? 0)) {
          settings.push('CaptureSync: <span class="text-warning">not in Wooded</span>')
        } else if (0 < (this.MaxPlayers ?? 0)) {
          settings.push('CaptureSync: <span class="text-success">true</span>')
        }
      }
      bool('ScenarioMerge', 'Scenario', 'MergeEnabled')
      bool('ShineSync', 'Shines', 'Enabled')
      bool('PersistShines', 'PersistShines', 'Enabled')
      bool('ClearShines', 'Shines', 'ClearOnNewSaves')
    }
    const stateColor = (state === 'online' ? 'text-success' : (state === 'offline' ? 'text-danger' : ''))
    return '<p>'
      + '<span class="' + stateColor + '">' + state + '</span>'
      + (state !== 'loading' && stamp ? ' &bull; ' + moment(stamp).fromNow() : '')
      + '</p>'
      + (settings.length ? '<p>' + settings.join('<br/>') + '</p>' : '')
  }

  stage2kingdom (stage: string) : TKingdom | null {
    const stages = this.stages.result
    if (!stages) { return null }
    for (const k of Object.keys(kingdom2name)) {
      if (stage in stages[k as TKingdom]) {
        return k as TKingdom
      }
    }
    return null
  }

  player2tagicon (player: IPlayer) : string | null {
    if (!player.GameMode) { return null }
    if (player.GameMode === GameMode.HideAndSeek) {
      if (player.Tagged === true) { return 'seek' }
      if (player.Tagged === false) { return 'hide' }
      return 'seek'
    }
    if (player.GameMode === GameMode.Sardines) {
      if (player.Tagged === true) { return 'pack' }
      if (player.Tagged === false) { return 'sardine' }
      return 'sardine'
    }
    if (player.GameMode === GameMode.FreezeTag) {
      return 'freeze'
    }
    return null
  }

  player2tagtitle (player: IPlayer) : string | null {
    if (!player.GameMode) { return null }
    if (player.GameMode === GameMode.HideAndSeek) {
      if (player.Tagged === true) { return 'Hide & Seek - Seeking' }
      if (player.Tagged === false) { return 'Hide & Seek - Hiding' }
      return 'Hide & Seek'
    }
    if (player.GameMode === GameMode.Sardines) {
      if (player.Tagged === true) { return 'Sardines - Hiding' }
      if (player.Tagged === false) { return 'Sardines - Seeking' }
      return 'Sardines'
    }
    if (player.GameMode === GameMode.FreezeTag) {
      return 'Freeze-Tag'
    }
    return null
  }

  player2kingdom (player: IPlayer) : string | null {
    if (player.Kingdom) { return player.Kingdom }
    if (!player.Stage) { return null }
    const k = this.stage2kingdom(player.Stage)
    if (!k) { return null }
    return this.kingdoms[k]
  }

  player2stage (player: IPlayer) : string | null {
    if (!player.Stage) { return null }
    if (player.Stage === 'HomeShipInsideStage') { return 'Odyssey' }
    if (!this.stages.result) { return null }
    const k = this.stage2kingdom(player.Stage)
    return (k ? this.stages.result[k][player.Stage].name || null : null)
  }

  get hasLocations () : boolean {
    return !!(this.players && this.players.some(p => p.Kingdom || p.Stage))
  }

  get hasCostumes () : boolean {
    return !!(this.players && this.players.some(p => p.Costume))
  }

  get hasCaptures () : boolean {
    return !!(this.players && this.players.some(p => p.Capture))
  }

  get hasStages () : boolean {
    return !!(this.players && this.players.some(p => p.Stage))
  }

  mounted () {
    this.onStateChange()
  }
}
