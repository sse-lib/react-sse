import EventBus, { Bus } from './eventsBus'

export interface EventSource {
  eventBus: Bus
  eventSource: globalThis.EventSource
}

export const CreateEventSource = (url: string, withCredentials: boolean): EventSource => {
  console.log(`call "CreateEventSource()"`)

  const eventBus = new EventBus()

  const eventSource = new EventSource(url, {
    withCredentials
  })

  eventSource.onmessage = (event: MessageEvent<any>) => {
    try {
      const data = JSON.parse(event.data)
      const serverEventType = `sse-lib/${data.serverEventType}`

      if (eventBus.has(serverEventType)) {
        console.log(`Event "${serverEventType}" exist!`)

        eventBus.emit(serverEventType, data)
      } else {
        console.log(`event "${serverEventType}" doesn't exist`)
      }
    } catch (err) {
      console.warn(err)
    }
  }

  eventSource.onerror = (err) => {
    console.warn(err)
  }

  return {
    eventBus,
    eventSource
  }
}
