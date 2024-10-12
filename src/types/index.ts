export type TState = 'loading' | 'offline' | 'online' | 'unknown' | 'dead'

export interface IHost {
  host?  : string
  ip?    : string
  port?  : number
  state? : TState | null
}

export interface ICostume {
  Cap  : string
  Body : string
}

export const enum GameMode {
  None = -1,
  Legacy = 0,
  HideAndSeek = 1,
  Sardines = 2,
  FreezeTag = 3,
}

export interface IPlayer {
  Name?     : string
  GameMode? : GameMode | number
  Kingdom?  : string
  Stage?    : string
  Capture?  : string
  Costume?  : ICostume
  Tagged?   : boolean
}

export interface ISettings {
  Server?        : { MaxPlayers?   : number }
  Scenario?      : { MergeEnabled? : boolean }
  Shines?        : { Enabled?      : boolean, ClearOnNewSaves? : boolean }
  PersistShines? : { Enabled?      : boolean }
}

export interface IVersion {
  html     : string
  details? : string
}

export interface IServer {
  name      : string
  link?     : string
  server    : IHost
  version?  : IVersion | string
  location? : { flag?: string, name: string }
  settings? : ISettings
}
