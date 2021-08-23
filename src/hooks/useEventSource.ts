// import { useContext, useEffect } from 'react'
// import { ReactSSEContext } from './contex'

export const useEventSource = (event: string) => {
  console.log('event: ', event)
  // const eventSource = useContext(ReactSSEContext)
  // console.log('eventSource -> useContext: ', eventSource)

  /*
  if (!eventSource) {
    throw new Error(`To use 'useEventSource()' wrap your application in provider:
        <ServerEventsProvider>
          <App />
        </ServerEventsProvider>
    `)
  }
  */
}
