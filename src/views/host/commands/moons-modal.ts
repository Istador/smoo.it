import { Vue, Component } from 'vue-property-decorator'

import { kingdom2name, TKingdom } from '@/store/kingdoms'
import { Stages, TKingdomStage } from '@/store/xstages'
import { Moons, TKingdomMoon } from '@/store/xmoons'

@Component({})
export default class MoonsModal extends Vue {
  kingdoms = kingdom2name
  stages = Stages
  moons = Moons

  stage2kingdom (kingdom: TKingdom, stage: string) : TKingdom | null {
    const stages = this.stages.result
    if (!stages) { return null }
    if (kingdom in stages && stage in stages[kingdom]) {
      return kingdom
    }
    for (const k of Object.keys(stages)) {
      if (stage in stages[k as TKingdom]) {
        return k as TKingdom
      }
    }
    return null
  }

  moon2stage (kingdom: TKingdom | null, moon: TKingdomMoon) : TKingdomStage | null {
    if (!kingdom) { return null }
    const stages = this.stages.result
    if (!stages) { return null }
    if (moon.stage in stages[kingdom]) { return stages[kingdom][moon.stage] }
    return null
  }

  moonStageIcon (stage: TKingdomStage|null) : string {
    if (!stage) { return 'question-mark' }
    if ((stage.subarea || false) === false) { return 'globe' }
    if (stage.subarea === true || stage.subarea === 'boss') { return 'house-door' }
    if (stage.subarea === 'shiveria') { return 'snow' }
    if (stage.subarea === 'deep') { return 'tree-fill' }
    return 'question-mark'
  }

  moonStageTitle (kingdom: TKingdom, moonKingdom: TKingdom, moon: TKingdomMoon, stage: TKingdomStage|null) : string {
    if (!stage) { return '' }
    const sname = (moon.subStage || stage.name)
    const kname = (kingdom !== moonKingdom ? this.kingdoms[moonKingdom] || null : null)
    return (
      '<b>Location</b><br/>'
      + `Can be found in <code>${sname}</code>`
      + (moon.subStage ? ` (inside of <code>${stage.name}</code>)` : '')
      + (kname ? ` of <code>${kname}</code>` : '')
      + '.'
    )
  }

  moonScenarioTitle (moonKingdom: TKingdom, moon: TKingdomMoon) : string {
    return (
      '<b>Change scenario</b><br/>'
      + `<p>Picking up this moon changes the scenario of <code>${this.kingdoms[moonKingdom]}</code> to <code>${moon.changeStageTo}</code>.</p>`
      + '<p>When <code>ShineSync</code> is enabled, other players need to reload the stage for it to change.</p>'
    )
  }
}
