import { Vue, Component } from 'vue-property-decorator'

import { kingdom2name } from '@/store/kingdoms'

@Component({})
export default class StagesAliasModal extends Vue {
  kingdoms = kingdom2name
}
