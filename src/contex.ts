import { createContext } from 'react'
import { EventSource } from './eventSource'

export const ReactSSEContext = createContext<EventSource | null>(null)
