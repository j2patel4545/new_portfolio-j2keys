import { useState } from 'react'
import { ArrowUp, Eye, EyeOff } from 'lucide-react'
import { Github, Linkedin, Twitter } from '@/components/common/Icons'
import { personalInfo } from '@/data/portfolioData'
import { navLinks } from '@/data/navigation'
import { useSmoothScroll } from '@/hooks/useLenisScroll'

export const Footer = () => {
  const { scrollTo, scrollToTop } = useSmoothScroll()
  const [showBgImage, setShowBgImage] = useState(true)

  const handleBackToTop = (e) => {
    e?.preventDefault?.()
    if (typeof scrollToTop === 'function') {
      scrollToTop({ duration: 1.2 })
    } else {
      scrollTo(0, { offset: 0, duration: 1.2 })
    }
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: personalInfo.github },
    { name: 'LinkedIn', icon: Linkedin, href: personalInfo.linkedin },
    { name: 'Twitter', icon: Twitter, href: personalInfo.twitter },
  ]

  return (
    <footer
      id="footer"
      className="relative w-full min-h-[70vh] md:min-h-[82vh] bg-[#ecebe8] dark:bg-black text-[#1c1c1e] dark:text-white flex flex-col justify-between selection:bg-rose-500 selection:text-white overflow-hidden border-t border-zinc-300/80 dark:border-zinc-800 z-20 transition-colors duration-300"
    >
      {/* UPPER FOOTER REGION: Contains Top Controls, Centerpiece, and Background Keyboard ending precisely at bottom */}
      <div className="relative flex-1 flex flex-col justify-between w-full overflow-hidden pt-8 sm:pt-12 md:pt-14">
        {/* Background Piano & Computer Keyboard Hybrid Image - Ends precisely where bottom copyright section starts */}
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 w-full overflow-hidden select-none z-0 transition-all duration-500 ease-in-out ${
            showBgImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <img
            src="/footer_piano_computer.png"
            alt="J2Keys Piano and Computer Keyboard Background"
            className="w-full h-auto max-h-[340px] sm:max-h-[420px] md:max-h-[500px] lg:max-h-[580px] object-cover object-bottom opacity-60 dark:opacity-50 transition-opacity duration-300"
            loading="lazy"
          />
          {/* Subtle vertical gradient blending from top */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#ecebe8]/20 to-[#ecebe8] dark:via-black/30 dark:to-black" />
        </div>

        {/* Subtle ambient warm paper glow & grain matching Hero */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 dark:opacity-25 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* TOP ROW: Status badge + Hide Toggle on left & Back to Top button on right */}
        <div className="relative w-full px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-zinc-900/80 border border-zinc-300/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="tracking-tight">Available for 2026 Collaborations</span>
            </div>

            {/* Toggle Background Image Hide/Show Button */}
            <button
              onClick={() => setShowBgImage((prev) => !prev)}
              className="group relative inline-flex items-center justify-center p-2 rounded-full bg-white/70 dark:bg-zinc-900/80 border border-zinc-300/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-xs cursor-pointer backdrop-blur-md"
              title={showBgImage ? 'Hide background graphic' : 'Show background graphic'}
              aria-label={showBgImage ? 'Hide background graphic' : 'Show background graphic'}
            >
              {showBgImage ? (
                <EyeOff className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              ) : (
                <Eye className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 text-rose-500" />
              )}
              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[10px] font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-md z-30">
                {showBgImage ? 'Hide BG' : 'Show BG'}
              </span>
            </button>
          </div>

          <button
            onClick={handleBackToTop}
            className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-800 hover:bg-rose-600 dark:hover:bg-rose-600 text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg text-xs sm:text-sm font-semibold"
            aria-label="Back to Top"
          >
            <span className="tracking-tight">Back to Top</span>
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </span>
          </button>
        </div>

        {/* CENTERPIECE: Dominant "let's talk" + Cursive "Together." Signature (Matching Hero UI) */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-8 my-auto select-none py-8 z-20">
          <div className="relative flex items-center justify-center text-center">
            {/* Main bold title: "let's talk" */}
            <h2
              className="text-[#1c1c1e] dark:text-white font-black leading-[0.88] tracking-[-0.055em] select-none uppercase hover:scale-[1.01] transition-transform duration-500"
              style={{
                fontFamily: "'Archivo', 'Syne', -apple-system, sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3.8rem, 15.5vw, 17rem)',
              }}
            >
              let’s talk
            </h2>

            {/* Overlaid handwritten cursive signature: "Together." */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] pointer-events-none z-10 whitespace-nowrap">
              <span
                className="inline-block text-[#e62638] dark:text-[#ff385c] font-normal select-none -rotate-6"
                style={{
                  fontFamily: "'Alex Brush', 'Caveat', cursive",
                  fontSize: 'clamp(3.5rem, 11vw, 12rem)',
                  lineHeight: 1,
                  textShadow: '0 2px 14px rgba(230, 38, 56, 0.35)',
                }}
              >
                Together.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: Copyright & Socials Section - Starts exactly where background image ends */}
      <div className="relative w-full px-6 sm:px-12 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 text-xs sm:text-[13px] md:text-sm text-zinc-700 dark:text-zinc-400 font-medium z-20 pt-4 sm:pt-5 pb-5 sm:pb-7 border-t border-zinc-300/80 dark:border-zinc-800 bg-[#ecebe8] dark:bg-black">
        {/* Col 1: Socials */}
        <div className="text-left flex items-center gap-3">
          <span className="text-zinc-500 dark:text-zinc-400 font-mono text-xs">SOCIALS:</span>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="text-right md:text-center flex flex-wrap justify-end md:justify-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer text-xs sm:text-[13px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Col 3: Location */}
        <div className="text-left md:text-center text-xs sm:text-[13px]">
          <span className="text-zinc-600 dark:text-zinc-400">Available Worldwide</span>
        </div>

        {/* Col 4: Copyright */}
        <div className="text-right text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400">
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

