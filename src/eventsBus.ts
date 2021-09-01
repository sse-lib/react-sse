// type MapEvent = (event: Event) => void
// type EventMap = Record<string, boolean>

export interface Bus {
  eventList: Map<string, any>
  subscribeOn(eventName: string, fn: (args: any) => void): number
  unsubscribe(eventName: string, subscriberID: number): void
  publish(eventName: string, ...args: any[]): void
  has(eventName: string): boolean
}

class EventBus implements Bus {
  readonly eventList: Map<string, any>

  constructor() {
    this.eventList = new Map()
  }

  public subscribeOn(event: string, fn: (args: any) => void) {
    this.eventList.has(event) || this.eventList.set(event, [])

    const mapEvent = this.eventList.get(event)

    if (mapEvent) {
      mapEvent.push(fn)
    }

    return mapEvent.length - 1
  }

  public unsubscribe(event: string, subscriberID: number) {
    const mapEvent = this.eventList.get(event)

    if (mapEvent.length) {
      mapEvent.splice(subscriberID, 1)
    }
  }

  public publish(event: string, ...args: any[]): void {
    const eventItem = this.eventList.get(event)
    if (!eventItem.length) return

    eventItem.forEach((callback: any) => {
      callback(...args)
    })
  }

  public has(eventName: string): boolean {
    return this.eventList.has(eventName)
  }
}

export default EventBus
