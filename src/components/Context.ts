import { createContext } from 'react'

export interface ServerEventsContextValue {}

export const ServerEventsContext = createContext<ServerEventsContextValue | null>(null)
