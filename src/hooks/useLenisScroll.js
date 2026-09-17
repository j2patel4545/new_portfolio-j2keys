import { useContext } from 'react'
import { SmoothScrollContext } from '@/context/SmoothScrollContext'

export const useLenisScroll = () => {
  return useContext(SmoothScrollContext)
}

export const useSmoothScroll = useLenisScroll
