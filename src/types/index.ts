
interface IHost {
  host : string
}

interface IIP {
  ip : string
}

export type TServer = (IHost | IIP | (IHost & IIP)) & { port? : number }

export interface IServer {
  name      : string
  server    : TServer
  version?  : string
  location? : { flag?: string, name: string }
}

export type TState = 'loading' | 'offline' | 'online' | 'unknown'
