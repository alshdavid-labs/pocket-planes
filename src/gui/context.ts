import { createContext, useContext } from 'react'
// import { useContext } from 'preact/hooks'
import { state } from './state'

export const GlobalContext = createContext({})
export const useInject = (): typeof state => useContext(GlobalContext) as any