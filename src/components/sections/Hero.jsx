import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/utils/gsap'
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Mail,
} from 'lucide-react'
import { Github, Linkedin, Twitter } from '@/components/common/Icons'
import { personalInfo } from '@/data/portfolioData'
import { navLinks } from '@/data/navigation'
import { useSmoothScroll } from '@/hooks/useLenisScroll'

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const portfolioTextRef = useRef(null)
  const scriptRef = useRef(null)
  const topBarRef = useRef(null)
  const bottomBarRef = useRef(null)
  const { scrollTo, getLenis } = useSmoothScroll()

  // Format today's date
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

  // GSAP Entrance animation on first load
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      gsap.set(scriptRef.current, { rotation: -6, transformOrigin: 'center center' })

      tl.from([topBarRef.current, bottomBarRef.current], {
        opacity: 0,
        y: (i) => (i === 0 ? -15 : 15),
        duration: 0.8,
        stagger: 0.1,
      })
        .from(
          portfolioTextRef.current,
          {
            scale: 0.93,
            opacity: 0,
            y: 35,
            duration: 1.1,
            ease: 'expo.out',
          },
          '-=0.5'
        )
        .from(
          scriptRef.current,
          {
            scale: 0.7,
            rotation: -14,
            opacity: 0,
            duration: 1.2,
            ease: 'back.out(1.5)',
          },
          '-=0.7'
        )
    },
    { scope: containerRef }
  )

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    // Small timeout to allow sliding back before smooth scroll
    setTimeout(() => {
      scrollTo(href)
    }, 350)
  }

  // Smooth-fast easing curve (Awwwards / Apple standard expo curve)
  const transitionConfig = {
    duration: 0.65,
    ease: [0.16, 1, 0.3, 1],
  }

  const menuDescriptions = {
    About: 'Biography, design principles & core philosophy',
    Skills: 'Comprehensive toolkit, frontend & backend architecture',
    Projects: 'Featured case studies & production digital works',
    Experience: 'Career journey, achievements & milestones',
    Contact: 'Get in touch for collaborations & inquiries',
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#ecebe8] dark:bg-black transition-colors duration-300"
    >
      {/* ========================================================
          FULL-PAGE MENUBAR LAYER (Clean, Light Editorial UI)
          ======================================================== */}
      <motion.div
        initial={false}
        animate={{
          x: isMenuOpen ? '0%' : '-100%',
          opacity: isMenuOpen ? 1 : 0.4,
        }}
        transition={transitionConfig}
        className="absolute inset-0 w-full min-h-screen bg-[#f7f6f3] dark:bg-black text-[#18181b] dark:text-white z-10 flex flex-col justify-between overflow-y-auto px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 selection:bg-rose-500 selection:text-white border-r border-zinc-300/80 dark:border-zinc-800/80"
        aria-hidden={!isMenuOpen}
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

        {/* MENUBAR HEADER */}
        <div className="relative w-full flex items-center justify-between z-20 pb-4 sm:pb-5 border-b border-zinc-300/60 dark:border-zinc-800/80">
          <button
            onClick={() => handleNavClick('#hero')}
            className="group flex items-center cursor-pointer text-left"
            aria-label="Back to Hero"
          >
            <span className="text-xs sm:text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              a Software Developer
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:bg-zinc-900/5 dark:hover:bg-white/10 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-200 cursor-pointer border border-transparent hover:border-zinc-300/80 dark:hover:border-zinc-800 whitespace-nowrap"
              aria-label="Close navigation menu"
              title="Close Menu"
            >
              <span className="tracking-tight font-medium">{formattedDate}</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-800 text-white group-hover:bg-rose-600 dark:group-hover:bg-rose-500 transition-colors shadow-xs">
                <X className="w-3.5 h-3.5 transition-transform group-hover:rotate-90 duration-200" />
              </span>
            </button>
          </div>
        </div>

        {/* MENUBAR BODY: Split clean editorial view */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto py-8 z-20">
          {/* Main Big Typographic Navigation Links */}
          <nav className="lg:col-span-7 flex flex-col space-y-2 sm:space-y-4">
            {navLinks.map((link, idx) => {
              const num = String(idx + 1).padStart(2, '0')
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -30,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isMenuOpen ? 0.15 + idx * 0.06 : 0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group w-full flex items-baseline justify-between text-left py-2.5 sm:py-3.5 border-b border-zinc-200/90 dark:border-zinc-800/90 hover:border-rose-500/60 dark:hover:border-rose-500/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-baseline gap-3 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-bold transition-colors">
                        {num}
                      </span>
                      <div>
                        <span className="font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-all duration-300 inline-block group-hover:translate-x-2">
                          {link.name}
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors mt-0.5 font-normal">
                          {menuDescriptions[link.name] || 'Explore section'}
                        </p>
                      </div>
                    </div>

                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-zinc-300 dark:border-zinc-700 group-hover:border-rose-600 group-hover:bg-rose-600 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </nav>

          {/* Side Editorial Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20,
            }}
            transition={{
              duration: 0.6,
              delay: isMenuOpen ? 0.45 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-zinc-200/90 dark:lg:border-zinc-800/90 lg:pl-12"
          >
            {/* Status & Statement */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                Available Worldwide & Remote
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                Designing High-Impact Digital Experiences & Architecture
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Direct Contact Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                <Mail className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" /> Direct Inquiries
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors block"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                Connect & Follow
              </div>
              <div className="flex flex-wrap gap-2.5">
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
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/90 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-sm"
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MENUBAR FOOTER */}
        <div className="relative w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-zinc-200/90 dark:border-zinc-800/90 text-xs text-zinc-500 dark:text-zinc-400 font-mono z-20">
          <span>© {new Date().getFullYear()} {personalInfo.name} • Creative Developer Portfolio</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">|</span>
            <span className="text-rose-600 dark:text-rose-400 font-sans font-medium">
              Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[10px]">ESC</kbd> to close
            </span>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          HERO CANVAS SECTION (Moves to right side when menu opens)
          ======================================================== */}
      <motion.div
        initial={false}
        animate={{
          x: isMenuOpen ? '100%' : '0%',
        }}
        transition={transitionConfig}
        className="relative w-full min-h-screen bg-[#ecebe8] dark:bg-black text-[#1c1c1e] dark:text-white flex flex-col justify-between selection:bg-rose-500 selection:text-white overflow-hidden py-8 md:py-12 border-b border-zinc-300/80 dark:border-zinc-800/80 z-20 shadow-[-25px_0_60px_rgba(0,0,0,0.12)] dark:shadow-[-25px_0_60px_rgba(0,0,0,0.7)] transition-colors duration-300"
      >
        {/* TOP ROW: Invisible layout spacer so fixed Navbar handles display & interaction */}
        <header
          ref={topBarRef}
          className="w-full px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between z-20 opacity-0 pointer-events-none select-none"
        >
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-tight text-zinc-900">
              a Software Developer
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9" />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:bg-zinc-900/5 text-xs sm:text-sm font-semibold text-zinc-900 hover:text-rose-600 transition-all duration-200 cursor-pointer border border-transparent hover:border-zinc-300"
              aria-label="Open full page menu"
              title="Open Menu"
            >
              <span className="tracking-tight">{formattedDate}</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white group-hover:bg-rose-600 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 duration-200" />
              </span>
            </button>
          </div>
        </header>

        {/* CENTERPIECE: Dominant "portfolio" + Centered Signature "J2Keys" */}
        <div className="relative flex-1 flex items-center justify-center w-full px-4 sm:px-8 my-auto select-none">
          <div className="relative flex items-center justify-center text-center">
            {/* Main bold title: "portfolio" */}
            <h1
              ref={portfolioTextRef}
              className="text-[#1c1c1e] dark:text-white font-black leading-[0.88] tracking-[-0.055em] select-none transition-colors duration-300"
              style={{
                fontFamily: "'Archivo', 'Syne', -apple-system, sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(4rem, 18.5vw, 20rem)',
              }}
            >
              portfolio
            </h1>

            {/* Overlaid handwritten cursive signature: "J2Keys" centered precisely */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] pointer-events-none z-10 whitespace-nowrap">
              <span
                ref={scriptRef}
                className="inline-block text-[#e62638] dark:text-[#ff385c] font-normal select-none"
                style={{
                  fontFamily: "'Alex Brush', 'Caveat', cursive",
                  fontSize: 'clamp(3.5rem, 12vw, 13rem)',
                  lineHeight: 1,
                  textShadow: '0 2px 14px rgba(230, 38, 56, 0.35)',
                }}
              >
                J2Keys
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: 4 Columns matching the reference image layout */}
        <footer
          ref={bottomBarRef}
          className="w-full px-6 sm:px-12 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 text-xs sm:text-[13px] md:text-sm text-zinc-700 dark:text-zinc-400 font-medium z-20"
        >
          {/* Col 1: LinkedIn */}
          <div className="text-left">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              in/j2keys
            </a>
          </div>

          {/* Col 2: GitHub */}
          <div className="text-right md:text-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              github.com/j2patel4545
            </a>
          </div>

          {/* Col 3: Location */}
          <div className="text-left md:text-center">
            <span className="text-zinc-700 dark:text-zinc-400">Available Worldwide</span>
          </div>

          {/* Col 4: Contact email */}
          <div className="text-right">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </footer>
      </motion.div>
    </section>
  )
}

export default Hero
