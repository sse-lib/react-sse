import { ConfigType } from './config'

export type EventSource = {}

export const getEventSource = (config: ConfigType) => {
  const eventSource = new EventSource(config.url)

  eventSource.onmessage = onMessageHandler

  eventSource.onerror = (err) => {
    console.warn(err)
  }

  return eventSource
}

function onMessageHandler(e: globalThis.MessageEvent) {
  console.log('e: ', e)
  try {
    const data = JSON.parse(e.data)
    console.log(data)
  } catch (err) {
    console.warn(err)
  }
}
