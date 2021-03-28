import React from 'react'

export type config = {
  url: string
  withCredentials: boolean
}

export interface ServerEventsProviderProps {
  config: config
}

export const ServerEventsProvider: React.FC<ServerEventsProviderProps>
