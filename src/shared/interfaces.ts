export interface SSH {
  user: string;
  host: string;
  auth: string;
  port: number;
  knownHosts: string;
  pass?: string;
  key?: string;
}

export interface SSL {
  key: string;
  cert: string;
}

export interface SSLBuffer {
  key?: Buffer;
  cert?: Buffer;
}

export interface Server {
  port: number;
  host: string;
  title: string;
  base: string;
  bypassHelmet: boolean;
}

export interface Config {
  ssh: SSH;
  server: Server;
  forceSSH: boolean;
  command: string;
  ssl?: SSL;
}
