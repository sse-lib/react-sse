import { createElement, useMemo, FC } from 'react'
import { ReactSSEContext } from './contex'
import { InitSSE, ConfigType } from './config'

type ProviderProps = {
  config: ConfigType
}

export const ServerEventsProvider: FC<ProviderProps> = ({ children, config }) => {
  const state = useMemo(() => InitSSE(config), [config])

  return createElement(
    ReactSSEContext.Provider,
    {
      value: state
    },
    children
  )
}
