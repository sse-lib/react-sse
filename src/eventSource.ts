// type MapEvent = (event: Event) => void
// type EventMap = Record<string, boolean>

type eventState = {
  // eventsMap: EventMap
  eventsMap: string[]
  startListenEvent(eventName: string): void
  stopListenEvent(eventName: string): void
  getState(): string[]
}

export interface EventSource {
  state: eventState
  eventSource: globalThis.EventSource
}

const getListenerState = (): eventState => {
  const state: eventState = {
    eventsMap: [],
    startListenEvent(eventName: string) {
      if (this.eventsMap.includes(eventName)) return

      this.eventsMap.push(eventName)

      console.log('reg new event in:', this.eventsMap)
    },
    stopListenEvent(eventName: string) {
      console.log('delete  event', eventName)
    },
    getState() {
      return this.eventsMap
    }
  }

  return state
}

export const CreateEventSource = (url: string, withCredentials: boolean): EventSource => {
  console.log(`call "CreateEventSource"`)
  const state = getListenerState()

  const eventSource = new EventSource(url, {
    withCredentials
  })

  eventSource.onmessage = (event: MessageEvent<any>) => {
    const events = state.getState()

    try {
      const { serverEventType } = JSON.parse(event.data)
      console.log('received event: ', serverEventType)

      console.log(events.includes(serverEventType))

      if (!events.includes(serverEventType)) {
        console.log(`event "${serverEventType}" doesn't exist`)
      } else {
        console.log(`Event "${serverEventType}" exist!`)
      }
    } catch (err) {
      console.warn(err)
    }
  }

  eventSource.onerror = (err) => {
    console.warn(err)
  }

  return {
    state,
    eventSource
  }
}
