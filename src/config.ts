export type ConfigType = {
  url: string
  withCredentials: boolean
}

export const InitSSE = (config: ConfigType) => {
  console.log('config: ', config)
  return config
}
