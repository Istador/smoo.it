import { Vue, Component } from 'vue-property-decorator'

const first = 'First Visit'
const kfr = 'Koopa Freerunning'
const revisit = 'Revisit/Peace'
const post = 'Post-game'
const peace = 'Peace'
const rock = 'Moon Rock'
const balloon = 'Balloon World'
const night = 'Night'

export const stages = {
  cap     : 'Cap Kingdom',
  cascade : 'Cascade Kingdom',
  sand    : 'Sand Kingdom',
  lake    : 'Lake Kingdom',
  wooded  : 'Wooded Kingdom',
  cloud   : 'Cloud Kingdom',
  lost    : 'Lost Kingdom',
  metro   : 'Metro Kingdom',
  sea     : 'Seaside Kingdom',
  snow    : 'Snow Kingdom',
  lunch   : 'Luncheon Kingdom',
  ruined  : 'Ruined Kingdom',
  bowser  : 'Bowser\'s Kingdom',
  moon    : 'Moon Kingdom',
  mush    : 'Mushroom Kingdom',
  dark    : 'Dark Side',
  darker  : 'Darker Side',
}

@Component
export default class HostCommands extends Vue {
  stages = stages

  scenarios = {
    cap     : [ first,      revisit,           post,           rock,    balloon,        kfr,            'Trailer' ],
    cascade : [ first,      revisit,           post,           rock,    kfr,            balloon,        undefined,           'E3/Trailer' ],
    sand    : [ first,      night,             peace,          post,    rock,           balloon,        kfr,                 'Kiosk Demo' ],
    lake    : [ first,      peace,             post,           rock,    kfr,            balloon ],
    wooded  : [ first,      'Post-Spewart',    peace,          post,    rock,           balloon,        kfr ],
    cloud   : [ first,      revisit,           post,           rock ],
    lost    : [ first,      revisit,           post,           rock,    balloon,        kfr ],
    metro   : [ night,      'Day',             'Festival',     peace,   post,           balloon,        'Festival Revisit?', rock, kfr,     'Morning Metro', '8-Bit Festival', undefined, 'E3 Day Metro', 'E3 Festial', 'Normal Night Metro' ],
    sea     : [ first,      peace,             post,           rock,    kfr,            balloon ],
    snow    : [ first,      peace,             post,           rock,    balloon,        kfr ],
    lunch   : [ first,      'Post-Meat',       peace,          post,    'Volcano-less', 'Volcano-less', kfr,                 rock, balloon, 'Bruncheon' ],
    ruined  : [ first,      peace,             post,           rock ],
    bowser  : [ first,      peace,             post,           rock,    balloon, kfr ],
    moon    : [ first,      'Peace/Post-game', rock,           balloon, kfr ],
    mush    : [ 'Rushroom', post,              'World Peace?', kfr,     balloon ],
    dark    : [ first,      peace ],
    darker  : [ first,      peace ],
  }
}
