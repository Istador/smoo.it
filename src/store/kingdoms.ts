export type TKingdom = (
    'cap'
  | 'cascade'
  | 'sand'
  | 'lake'
  | 'wooded'
  | 'cloud'
  | 'lost'
  | 'metro'
  | 'sea'
  | 'snow'
  | 'lunch'
  | 'ruined'
  | 'bowser'
  | 'moon'
  | 'mush'
  | 'dark'
  | 'darker'
)

export const kingdom2name : { [key in TKingdom]: string } = {
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
