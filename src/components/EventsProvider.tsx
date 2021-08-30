import { FC, useEffect, useMemo } from 'react'
import { CreateEventSource } from '../eventSource'
import { ServerEventsContext as Context } from './Context'

interface EventsProviderProps {
  url: string
  withCredentials?: boolean
}

export const EventsProvider: FC<EventsProviderProps> = ({
  url,
  withCredentials = false,
  children
}) => {
  const eventSource = useMemo(() => CreateEventSource(url, withCredentials), [])

  useEffect(() => {
    return () => {
      eventSource.eventSource.close()
    }
  }, [])

  return <Context.Provider value={eventSource}>{children}</Context.Provider>
}
