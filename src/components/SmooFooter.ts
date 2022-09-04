import { Vue, Component, Watch } from 'vue-property-decorator'

import DarkMode from '@/store/dark-mode'

@Component({})
export default class SmooFooter extends Vue {
  get darkMode () { return DarkMode.enabled }
  set darkMode (value: boolean) { DarkMode.setEnabled(value) }

  @Watch('darkMode')
  onDarkModeChange () {
    if (this.darkMode) {
      document.body.classList.add('smoo-dark-mode')
    } else {
      document.body.classList.remove('smoo-dark-mode')
    }
  }

  mounted () {
    this.onDarkModeChange()
  }
}
