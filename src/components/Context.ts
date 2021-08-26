import { createContext } from 'react'
import { EventSource } from '../eventSource'

export interface ServerEventsContextValue extends EventSource {}

export const ServerEventsContext = createContext<ServerEventsContextValue | null>(null)
