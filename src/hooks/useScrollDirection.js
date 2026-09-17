import { useState, useEffect, useRef } from 'react'

export const useScrollDirection = ({
  threshold = 10,
  topThreshold = 50,
  headerRef = null,
} = {}) => {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    lastScrollYRef.current = window.pageYOffset || document.documentElement.scrollTop || 0

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0
      const prevScrollY = lastScrollYRef.current
      const diff = scrollY - prevScrollY

      setIsScrolled(scrollY > topThreshold)

      // Measure navbar height dynamically
      const navbarHeight = headerRef?.current?.offsetHeight || 80
      const marquee = document.getElementById('marquee-banner')

      // If on homepage where marquee exists: keep navbar visible throughout 100vh Hero section
      // until the Marquee reaches the navbar.
      // On other pages: keep visible when scrollY <= topThreshold.
      const isInHeroOrTop = marquee
        ? marquee.getBoundingClientRect().top > navbarHeight
        : scrollY <= topThreshold

      if (isInHeroOrTop) {
        setScrollDirection('up')
        setIsVisible(true)
        lastScrollYRef.current = scrollY > 0 ? scrollY : 0
        return
      }

      // Check if scroll delta exceeds threshold to prevent micro-jitter
      if (Math.abs(diff) >= threshold) {
        if (diff > 0) {
          // Scrolling down past Hero / Marquee: smoothly hide navbar
          setScrollDirection('down')
          setIsVisible(false)
        } else {
          // Scrolling up: reveal navbar
          setScrollDirection('up')
          setIsVisible(true)
        }
        lastScrollYRef.current = scrollY > 0 ? scrollY : 0
      }
    }

    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [threshold, topThreshold, headerRef])

  return { scrollDirection, isScrolled, isVisible }
}
