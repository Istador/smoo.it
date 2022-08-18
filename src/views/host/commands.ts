import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HostCommands extends Vue {
  stages = {
    cap     : 'Cap Kingdom',
    cascade : 'Cascade Kingdom',
    sand    : 'Sand Kingdom',
    lake    : 'Lake Kingdom',
    wooded  : 'Wooded Kingdom',
    cloud   : 'Cloud Kingdom',
    lost    : 'Lost Kingdom',
    metro   : 'Metro Kingdom',
    sea     : 'Sea Kingdom',
    snow    : 'Snow Kingdom',
    lunch   : 'Luncheon Kingdom',
    ruined  : 'Ruined Kingdom',
    bowser  : 'Bowser\'s Kingdom',
    moon    : 'Moon Kingdom',
    mush    : 'Mushroom Kingdom',
    dark    : 'Dark Side',
    darker  : 'Darker Side',
  }
}
