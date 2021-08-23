import { FC, useMemo } from 'react'
import { ServerEventsContext } from './Context'

interface EventsProviderProps {
  url: string
  withCredentials?: boolean
}

export const EventsProvider: FC<EventsProviderProps> = ({
  url,
  withCredentials = false,
  children
}) => {
  const eventSource = useMemo(
    () => ({
      url,
      withCredentials
    }),
    []
  )

  const Context = ServerEventsContext

  return <Context.Provider value={eventSource}>{children}</Context.Provider>
}
