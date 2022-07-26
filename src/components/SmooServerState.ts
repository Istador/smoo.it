import { Vue, Component, Prop } from 'vue-property-decorator'

import { TServer, TState } from '@/types'

@Component({})
export default class SmooServerState extends Vue {
  private state : TState = 'loading'

  @Prop({ required: true })
  private server! : TServer

  private get icon () : string {
    switch (this.state) {
    case 'loading': return 'arrow-clockwise'
    case 'unknown': return 'circle'
    default: return 'circle-fill'
    }
  }

  private get animation () : string {
    return (this.state === 'loading' ? 'spin' : '')
  }

  mounted () {
    this.state = 'unknown'

    // TODO: check servers / get data from a backend
    // const states = ['unknown', 'online', 'offline']
    // window.setTimeout(function () {
    //   this.state = states[Math.floor(Math.random() * states.length)]
    // }.bind(this), 1000 + Math.floor(Math.random() * 2000))
  }
}
