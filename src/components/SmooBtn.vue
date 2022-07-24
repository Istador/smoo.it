<template>
  <b class="smoo-btn" :title="title">
    <span v-if="custom" :class="{ [btn]: true }">{{ btn }}</span>
    <b-icon v-else :icon="icon" :title="title"/>
  </b>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

const customBtns = ['ZL', 'L', 'ZR', 'R', 'A', 'B']
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

  private get custom () { return customBtns.includes(this.btn) }

  private get icon () : string {
    if (this.DUp) { return 'arrow-up-circle' }
    if (this.DDown) { return 'arrow-down-circle' }
    if (this.DLeft) { return 'arrow-left-circle' }
    if (this.DRight) { return 'arrow-right-circle' }
    return ''
  }

  private get title () : string {
    if (this.custom) { return this.btn }
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
</script>

<style lang="scss">
  .smoo-btn {
    .ZL, .L, .ZR, .R, .A, .B {
      display: inline-block;
      text-align: center;
      border: 1px solid black;
      border-radius: 0.25em;
      width: 2.5em;
      font-size: 0.65em;
      letter-spacing: 0.2em;
      line-hieght: 1em;
      vertical-align: middle;
      padding-top: 0.2em;
      padding-left: 0.2em;
      background-color: #eee;
    }

    .ZL, .L { border-top-left-radius: 1.2em; }
    .ZR, .R { border-top-right-radius: 1.2em; }

    .A, .B {
      border-radius:
      1em; width: 2em;
    }

    svg {
      background-color: #eee;
      border-radius: 1em;
    }
  }
</style>
