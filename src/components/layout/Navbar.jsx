import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, X, Mail } from 'lucide-react'
import { Github, Linkedin, Twitter } from '@/components/common/Icons'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { navLinks } from '@/data/navigation'
import { personalInfo } from '@/data/portfolioData'
import { useSmoothScroll } from '@/hooks/useLenisScroll'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export const Navbar = () => {
  const headerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollTo, getLenis } = useSmoothScroll()
  const { isScrolled, isVisible } = useScrollDirection({ headerRef })

  // Format today's date matching Hero section
  const formattedDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  // Keyboard accessibility: Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Lock/unlock Lenis scroll when full-page menu is active
  useEffect(() => {
    const lenis = getLenis?.()
    if (isMenuOpen) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [isMenuOpen, getLenis])

  // Navigation click handler
  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      scrollTo(href)
    }, 400)
  }

  const menuDescriptions = {
    About: 'Background, approach & engineering philosophy',
    Skills: 'Technical proficiencies, frameworks & toolbelt',
    Projects: 'Featured case studies & production digital works',
    Experience: 'Career journey, achievements & milestones',
    Contact: 'Get in touch for collaborations & inquiries',
  }

  return (
    <>
      {/* Top Navbar: Smoothly slides up when scrolling down, reveals when scrolling up */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 border-b transition-all duration-300 ease-in-out bg-[#ecebe8]/80 dark:bg-black/85 backdrop-blur-xl pt-4 sm:pt-6 md:pt-12 pb-3 sm:pb-4 md:pb-5 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-between ${
          isScrolled ? 'border-zinc-300/70 dark:border-zinc-800/80 shadow-xs' : 'border-zinc-300/30 dark:border-zinc-900/80'
        } ${
          isVisible || isMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Left: a Software Developer */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#hero')
          }}
          className="group flex items-center cursor-pointer"
        >
          <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
            a Software Developer
          </span>
        </a>

        {/* Right: Theme Toggle (just pehale) + Date with Arrow Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3">
          <ThemeToggle />

          <motion.button
            onClick={() => setIsMenuOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.92, x: -8 }}
            className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full hover:bg-zinc-900/5 dark:hover:bg-white/10 text-[11px] sm:text-xs md:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-200 cursor-pointer border border-transparent hover:border-zinc-300/80 dark:hover:border-zinc-800"
            aria-label="Open full page menu"
            title="Open Menu (Rope Pull)"
          >
            <span className="tracking-tight font-medium">{formattedDate}</span>
            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-900 dark:bg-white dark:text-black text-white group-hover:bg-rose-600 dark:group-hover:bg-rose-500 dark:group-hover:text-white transition-colors shadow-xs">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5 duration-200" />
            </span>
          </motion.button>
        </div>
      </header>

      {/* Full-Page Menubar with Rope-Pulled Spring Animation from Left to Right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Backdrop Blur overlay */}
            <motion.div
              key="menu-dim-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-xs z-[90]"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Layer 1: Leading Dark Tension Trail (Creates high-velocity rope pull sensation) */}
            <motion.div
              key="menu-lead-curtain"
              initial={{ x: '-100%', skewX: -4 }}
              animate={{ x: '0%', skewX: 0 }}
              exit={{
                x: '-100%',
                skewX: -3,
                transition: { duration: 0.32, ease: [0.32, 0, 0.67, 0] },
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 28,
                mass: 0.75,
              }}
              className="fixed inset-0 w-full h-[100dvh] bg-zinc-900 z-[95] pointer-events-none"
            />

            {/* Layer 2: Main Editorial Menubar Canvas - Springs in from left to right like pulled by a high-tension rope */}
            <motion.div
              key="menu-main-panel"
              initial={{ x: '-100%', skewX: -1.5 }}
              animate={{ x: '0%', skewX: 0 }}
              exit={{
                x: '-100%',
                skewX: -1.5,
                transition: { duration: 0.38, ease: [0.36, 0, 0.66, -0.2] },
              }}
              transition={{
                type: 'spring',
                stiffness: 185,
                damping: 21,
                mass: 0.95,
                restDelta: 0.001,
              }}
              className="fixed inset-0 w-full h-[100dvh] bg-[#f7f6f3] dark:bg-black text-[#18181b] dark:text-white z-[100] flex flex-col justify-between overflow-y-auto overflow-x-hidden px-6 sm:px-12 md:px-16 lg:px-24 pt-8 md:pt-12 pb-6 md:pb-10 selection:bg-rose-500 selection:text-white shadow-[40px_0_100px_rgba(0,0,0,0.3)] border-r-4 border-rose-600 dark:border-rose-500"
            >
              {/* Subtle warm paper grain & glow */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 dark:opacity-25">
                <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-rose-500/5 blur-[140px] rounded-full" />
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full" />
                <div
                  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
              </div>

              {/* Header: Mirrors Hero Navbar with minimal UI Close button */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="relative w-full flex items-center justify-between z-20 pb-3 sm:pb-5 border-b border-zinc-300/60 dark:border-zinc-800/80"
              >
                {/* Left: a Software Developer */}
                <button
                  onClick={() => handleNavClick('#hero')}
                  className="group flex items-center cursor-pointer text-left"
                  aria-label="Back to top and close menu"
                >
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    a Software Developer
                  </span>
                </button>

                {/* Right: Theme Toggle + Date with Minimal Close Button (replacing ArrowRight) */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3">
                  <ThemeToggle />

                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.92, x: 8 }}
                    className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full hover:bg-zinc-900/5 dark:hover:bg-white/10 text-[11px] sm:text-xs md:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-200 cursor-pointer border border-transparent hover:border-zinc-300/80 dark:hover:border-zinc-800 whitespace-nowrap"
                    aria-label="Close navigation menu"
                    title="Close Menu"
                  >
                    <span className="tracking-tight font-medium">{formattedDate}</span>
                    <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-900 dark:bg-white dark:text-black text-white group-hover:bg-rose-600 dark:group-hover:bg-rose-500 dark:group-hover:text-white transition-colors shadow-xs">
                      <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:rotate-90 duration-200" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Menu Body */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center my-auto py-3 sm:py-6 z-20">
                {/* Big Typographic Navigation Links - Staggered elastic entrance from left */}
                <nav className="lg:col-span-7 flex flex-col space-y-0.5 sm:space-y-1.5">
                  {navLinks.map((link, idx) => {
                    const num = String(idx + 1).padStart(2, '0')
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 240,
                          damping: 22,
                          delay: 0.12 + idx * 0.045,
                        }}
                      >
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className="group w-full flex items-center justify-between text-left py-1.5 sm:py-3 border-b border-zinc-200/80 dark:border-zinc-800/80 hover:border-rose-500/60 dark:hover:border-rose-500/60 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-6">
                            <span className="font-mono text-[11px] sm:text-sm text-rose-600 dark:text-rose-400 font-bold transition-colors w-4 sm:w-6 shrink-0">
                              {num}
                            </span>
                            <div>
                              <span className="font-black text-xl sm:text-2xl md:text-3xl lg:text-[2.65rem] tracking-tight text-zinc-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-all duration-300 inline-block group-hover:translate-x-2 leading-tight">
                                {link.name}
                              </span>
                              <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors mt-0.5 font-normal">
                                {menuDescriptions[link.name] || 'Explore section'}
                              </p>
                            </div>
                          </div>

                          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-zinc-700 group-hover:border-rose-600 group-hover:bg-rose-600 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110 shrink-0">
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </button>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Side Info Panel - Springs in from left */}
                <motion.div
                  initial={{ opacity: 0, x: -45 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24,
                    delay: 0.22,
                  }}
                  className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5 lg:border-l lg:border-zinc-200/90 dark:lg:border-zinc-800/90 lg:pl-10"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-[11px] sm:text-xs font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                      </span>
                      Available Worldwide & Remote
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                      Designing High-Impact Digital Experiences & Architecture
                    </h3>

                    <p className="text-[11px] sm:text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {personalInfo.tagline}
                    </p>
                  </div>

                  {/* Direct Contact */}
                  <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                      <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-600 dark:text-rose-400" /> Direct Inquiries
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm md:text-base font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>

                  {/* Socials */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                      Connect & Follow
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {[
                        { name: 'GitHub', href: personalInfo.github, icon: Github },
                        { name: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
                        { name: 'Twitter / X', href: personalInfo.twitter, icon: Twitter },
                      ].map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-800 text-[11px] sm:text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
                        >
                          <item.icon className="w-3.5 h-3.5" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                className="relative w-full flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-zinc-200/90 dark:border-zinc-800/90 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono z-20"
              >
                <span className="text-center sm:text-left">© {new Date().getFullYear()} {personalInfo.name} • Creative Developer Portfolio</span>
                <span className="text-rose-600 dark:text-rose-400 font-sans font-medium text-[11px] sm:text-xs">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[10px]">ESC</kbd> to close
                </span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

