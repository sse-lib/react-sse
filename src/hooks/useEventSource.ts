import { useContext, useEffect, useState } from 'react'
import { ServerEventsContext } from '../components/Context'

export interface ProcessingResult<TData = any> {
  data: TData | undefined
  unsubscribe: () => void
}

export const useEventSource = (eventType: string): ProcessingResult => {
  const [subscriberID, setSubscriberID] = useState<number>(0)
  const [eventData, setEventData] = useState()

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

  const unsubscribe = () => eventSource.eventBus.unsubscribe(formatEvent, subscriberID)

  const handleEventEmit = (data: any): void => {
    setEventData(data)
  }

  useEffect(() => {
    const id = eventSource.eventBus.subscribeOn(formatEvent, handleEventEmit)
    console.log(eventSource.eventBus)
    setSubscriberID(id)
    return () => {
      unsubscribe()
    }
  }, [])

  return {
    data: eventData,
    unsubscribe
  }
}
