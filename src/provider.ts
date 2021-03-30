import { createElement, useMemo, FC } from 'react'
import { ReactSSEContext } from './contex'
import { getEventSource } from './eventSource'
import { InitServerEvents, ConfigType } from './config'

type ProviderProps = {
  config: ConfigType
}

export const ServerEventsProvider: FC<ProviderProps> = ({ children, config }) => {
  const options = InitServerEvents(config)

  const eventSource = useMemo(() => getEventSource(options), [options])

  console.log('Provider -> eventSource: ', eventSource)

  return createElement(
    ReactSSEContext.Provider,
    {
      value: eventSource
    },
    children
  )
}
