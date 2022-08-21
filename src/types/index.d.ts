export type TState = 'loading' | 'offline' | 'online' | 'unknown'

export interface IHost {
  host?  : string
  ip?    : string
  port?  : number
  state? : TState | null
}

export interface IServer {
  name      : string
  link?     : string
  server    : IHost
  version?  : string
  location? : { flag?: string, name: string }
}
