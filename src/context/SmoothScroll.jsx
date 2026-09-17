import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/utils/gsap'
import { SmoothScrollContext } from './SmoothScrollContext'

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenisInstance

    // Synchronize Lenis with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update)

    const updateTicker = (time) => {
      lenisInstance.raf(time * 1000)
    }

    // Prioritize Lenis RAF before ScrollTrigger updates on each tick to eliminate frame desync
    gsap.ticker.add(updateTicker, false, true)
    gsap.ticker.lagSmoothing(0)

    // Cleanup on unmount
    return () => {
      gsap.ticker.remove(updateTicker)
      lenisInstance.destroy()
    }
  }, [])

  const scrollTo = (target, options = {}) => {
    let resolvedTarget = target
    let resolvedOffset = options.offset !== undefined ? options.offset : -70

    // If scrolling to top, hero section, or position 0:
    if (
      target === 0 ||
      target === 'top' ||
      target === '#top' ||
      target === '#hero' ||
      target === '#'
    ) {
      resolvedTarget = 0
      resolvedOffset = options.offset !== undefined ? options.offset : 0
    }

    if (lenisRef.current) {
      // Ensure Lenis is unpaused/running
      lenisRef.current.start()
      lenisRef.current.scrollTo(resolvedTarget, {
        offset: resolvedOffset,
        duration: 1.2,
        ...options,
      })
    } else {
      if (resolvedTarget === 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = typeof resolvedTarget === 'string' ? document.querySelector(resolvedTarget) : resolvedTarget
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
  }

  const scrollToTop = (options = {}) => {
    scrollTo(0, { offset: 0, duration: 1.2, ...options })
  }

  const getLenis = () => lenisRef.current

  return (
    <SmoothScrollContext.Provider value={{ getLenis, scrollTo, scrollToTop }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
