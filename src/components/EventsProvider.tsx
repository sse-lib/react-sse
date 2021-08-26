import { FC, useMemo, useEffect } from 'react'
import { CreateEventSource } from '../eventSource'
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
  const Context = ServerEventsContext

  // const eventSource = useMemo(() => {}, [])
  const eventSource = CreateEventSource(url, withCredentials)

  useEffect(() => {
    return () => {
      eventSource.eventSource.close
    }
  }, [])

  return <Context.Provider value={eventSource}>{children}</Context.Provider>
}
