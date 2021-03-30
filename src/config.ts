export type ConfigType = {
  url: string
  withCredentials?: boolean
}

export const InitServerEvents = (config: ConfigType) => {
  console.log('config: ', config)

  return config
}
