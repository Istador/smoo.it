import { Vue, Component, Ref } from 'vue-property-decorator'

import { BCollapse } from 'bootstrap-vue'

@Component({})
export default class SmooHeader extends Vue {
  @Ref()
  collapse! : BCollapse

  blur () {
    // hide hamburger menu
    if (this.collapse.show) {
      this.collapse.toggle()
    }
  }
}
