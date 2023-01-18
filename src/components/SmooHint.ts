import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class SmooHint extends Vue {
  @Prop({ required: false, type: String, default: null })
  icon! : string|null

  @Prop({ required: false, type: String, default: null })
  fa! : string|null

  @Prop({ required: true, type: String })
  title! : string

  private pressed = false
}
