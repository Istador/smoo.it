import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  initialized = false

  get visible () { return this.$route.name === 'home' }

  @Watch('visible')
  onVisibleChange () {
    if (this.visible) {
      this.initialized = true
    }
  }

  mounted () {
    this.onVisibleChange()
  }
}
