export type EventSource = {}

export const getEventSource = (url: string) => {
  const eventSource = new EventSource(url)

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
