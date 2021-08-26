import { useContext } from 'react'
import { ServerEventsContext } from '../components/Context'

export const useEventSource = (eventType: string) => {
  const eventSource = useContext(ServerEventsContext)
  console.log('eventSource -> useContext: ', eventSource)

  eventSource?.state.startListenEvent(eventType)

  if (!eventSource) {
    throw new Error(`To use "useEventSource()" wrap your application in provider:
        <EventsProvider>
          <YourApp />
        </EventsProvider>
    `)
  }
}
