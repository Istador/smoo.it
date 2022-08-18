import { Vue, Component, Prop } from 'vue-property-decorator'

const customBtns = [ 'ZL', 'L', 'ZR', 'R', 'A', 'B' ]
type TBtn = 'ZL' | 'L' | 'ZR' | 'R' | 'A' | 'B' | 'DUp' | 'DDown' | 'DLeft' | 'DRight'

@Component({})
export default class Servers extends Vue {
  private get btn () : TBtn|null {
    if (this.ZL) { return 'ZL' }
    if (this.L) { return 'L' }
    if (this.ZR) { return 'ZR' }
    if (this.R) { return 'R' }
    if (this.A) { return 'A' }
    if (this.B) { return 'B' }
    if (this.DUp) { return 'DUp' }
    if (this.DDown) { return 'DDown' }
    if (this.DLeft) { return 'DLeft' }
    if (this.DRight) { return 'DRight' }
    return null
  }

  private get custom () { return customBtns.includes(this.btn || '') }

  private get icon () : string {
    if (this.DUp) { return 'arrow-up-circle' }
    if (this.DDown) { return 'arrow-down-circle' }
    if (this.DLeft) { return 'arrow-left-circle' }
    if (this.DRight) { return 'arrow-right-circle' }
    return ''
  }

  private get title () : string {
    if (this.custom && this.btn) { return this.btn }
    if (!this.btn) { return '' }
    return 'D-Pad ' + this.btn.substr(1)
  }

  @Prop({ required: false, type: Boolean, default: false })
  private ZL! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private L! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private ZR! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private R! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private A! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private B! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private DUp! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private DDown! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private DLeft! : boolean

  @Prop({ required: false, type: Boolean, default: false })
  private DRight! : boolean
}
