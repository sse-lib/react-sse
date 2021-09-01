import EventBus, { Bus } from './eventsBus'

export interface EventSource {
  eventBus: Bus
  eventSource: globalThis.EventSource
}

export const CreateEventSource = (url: string, withCredentials: boolean): EventSource => {
  const eventBus = new EventBus()

  const eventSource = new EventSource(url, {
    withCredentials
  })

  eventSource.onmessage = (event: MessageEvent<any>): void => {
    try {
      const data = JSON.parse(event.data)

      const keyField = data.serverEventType
      if (!keyField) {
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(`
          Field "serverEventType" does not exist!
          Each event received is expected to have a "serverEventType" field
          {
            ...
            "serverEventType": "name of received event"
            ...
          }
        `)
        }

        return
      }

      const serverEventType = `sse-lib/${keyField}`

      console.log('new event:', event)

      if (eventBus.has(serverEventType)) {
        eventBus.publish(serverEventType, data)
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`No hooks are expecting "${data.serverEventType}" event`)
        }
      }
    } catch (err) {
      console.warn(err)
    }
  }

  eventSource.onerror = (err): void => {
    console.warn(err)
  }

  return {
    eventBus,
    eventSource
  }
}
