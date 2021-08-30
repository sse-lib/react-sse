import { useContext, useEffect } from 'react'
import { ServerEventsContext } from '../components/Context'

export const useEventSource = (eventType: string) => {
  const formatEvent = `sse-lib/${eventType}`

  const eventSource = useContext(ServerEventsContext)
  console.log('eventSource -> useContext: ', eventSource)

  if (!eventSource) {
    throw new Error(`To use "useEventSource()" wrap your application in provider:
        <EventsProvider>
          <YourApp />
        </EventsProvider>
    `)
  }

  const handleEventEmit = (arg: any): void => {
    console.log('inside a hook', arg)
  }

  useEffect(() => {
    const subscriber = eventSource.eventBus.subscribeOn(formatEvent, handleEventEmit)
    console.log(eventSource.eventBus)

    return () => {
      eventSource.eventBus.unsubscribe(formatEvent, subscriber)
    }
  }, [])
}
