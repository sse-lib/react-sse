import { FC } from 'react'
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

  return <Context.Provider value={{ url, withCredentials }}>{children}</Context.Provider>
}
