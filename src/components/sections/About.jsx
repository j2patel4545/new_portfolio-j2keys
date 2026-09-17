import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  Laptop,
  GraduationCap,
  ExternalLink,
} from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useLenisScroll'

export const About = () => {
  const { scrollTo } = useSmoothScroll()

  // Typewriter designations highlighting professional MERN & engineering expertise
  const designations = [
    'Software Developer',
    'MERN Stack Developer',
    'Team Leader',
    'Pianist',
  ]

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = designations[currentTitleIndex]
    let timer

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        // Typing speed: ~90ms per character
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        }, 90)
      } else {
        // Full word typed, pause for 1800ms before backspacing
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 1800)
      }
    } else {
      if (displayedText.length > 0) {
        // Erasing speed: ~45ms per character
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1))
        }, 45)
      } else {
        // Finished erasing, move to next title
        setIsDeleting(false)
        setCurrentTitleIndex((prev) => (prev + 1) % designations.length)
        timer = setTimeout(() => {}, 350)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentTitleIndex, designations])

  // Key stats highlighting experience, shipped works, Software Developer, and MERN | React
  const metrics = [
    { value: '2+ Yrs', label: 'Hands-on Exp.', sub: 'Production software' },
    { value: '25+', label: 'Shipped Projects', sub: 'End-to-end delivery' },
    { value: 'Software', label: 'Developer', sub: 'Lead & Full-Stack' },
    { value: 'MERN | React', label: 'Core Stack', sub: 'Node, Express, DBs' },
  ]

  // 3 Career & Education Cards matching Experience timeline
  const experienceCards = [
    {
      icon: Briefcase,
      title: 'DigiFarm Technologies',
      badge: 'MERN Developer, Team Leader & Mentor',
      desc: 'January 2025 – Present. Leading full-stack MERN engineering, developing enterprise LIMS, implementing RBAC security, and mentoring engineering interns.',
    },
    {
      icon: Laptop,
      title: 'Izonnet Web Solution Pvt. Ltd',
      badge: 'Freelancing & Ex-Intern (2024)',
      desc: 'Modernized legacy CodeIgniter/PHP monoliths into modern MERN stacks, built client portals, and executed freelance client deliverables.',
    },
    {
      icon: GraduationCap,
      title: 'Academic & Engineering Degrees',
      badge: 'Diploma (19–22) • B.E. (22–25) • M.S. (2026)',
      desc: 'Diploma in Computer Engineering (2019–2022), Bachelor of Computer Engineering (2022–2025), and Master of Software Engineering (Ongoing 2026).',
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative bg-[#ECEBE7] dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Subtle ambient decorative gradient */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-rose-200/20 dark:from-rose-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid: Left Side Image | Right Side Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Clean Portrait Image (No box, Black & White by default, Color on hover) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative group flex items-center justify-center cursor-pointer select-none">
              {/* Subtle ambient backlight on hover */}
              <div className="absolute inset-0 max-w-[400px] max-h-[480px] m-auto bg-radial from-stone-400/20 dark:from-rose-500/15 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Profile Portrait: Black & White by default, Color on hover */}
              <img
                src="/jetu_profile_2.png"
                alt="Jetal Patel - Software Developer"
                className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] h-auto object-contain filter grayscale contrast-[105%] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out drop-shadow-xl group-hover:drop-shadow-2xl group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Animated Designation, Editorial Narrative, Stats & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-7"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 dark:bg-zinc-800 text-white text-xs font-semibold tracking-wider uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>About Me</span>
              </div>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">
                Crafting With Precision & Soul
              </span>
            </div>

            {/* Typewriter Designation Title */}
            <div className="space-y-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.15] flex flex-wrap justify-center lg:justify-start items-baseline">
                <span>I'm a&nbsp;</span>
                <span className="text-rose-600 dark:text-rose-400 inline-flex items-baseline relative">
                  <span className="relative">
                    {displayedText}
                    {/* Blinking Cursor Bar */}
                    <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-rose-600 dark:bg-rose-400 ml-1.5 translate-y-[2px] animate-pulse" />
                  </span>
                </span>
              </h2>
            </div>

            {/* In-depth Editorial Paragraphs */}
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-justify leading-relaxed">
                Results-driven <span className="font-bold text-zinc-900 dark:text-white">MERN Stack Developer</span> with <span className="font-bold text-zinc-900 dark:text-white">2+ years of hands-on industry experience</span> building, optimizing, and deploying production-grade web applications. Proven track record leading end-to-end client requirements, modernizing legacy CodeIgniter/PHP monoliths into scalable MERN solutions, and developing enterprise Laboratory Information Management Systems (LIMS).
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed text-justify">
                Proficient across <span className="font-semibold text-zinc-900 dark:text-white">React, Node.js, Express, Fastify, PostgreSQL, and MySQL</span>, with deep expertise in role-based access control (RBAC), API security, client sprint demonstrations, and mentoring junior engineers. Live portfolio & production work available at{' '}
                <a
                  href="https://www.j2codes.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 underline decoration-rose-500/40 hover:decoration-rose-600 transition-colors inline-flex items-center gap-1"
                >
                  www.j2codes.in
                  <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
                .
              </p>
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white/70 dark:bg-zinc-800 backdrop-blur-sm border border-zinc-200/90 dark:border-zinc-700/80 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 flex flex-col items-center sm:items-start text-center sm:text-left justify-between"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight whitespace-nowrap">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 hidden sm:block">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Career & Education Cards */}
            <div className="space-y-2.5 pt-2">
              {experienceCards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/60 dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/80 flex items-start gap-3.5 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200 shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Icon className="w-4 h-4 text-rose-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-snug">
                          {card.title}
                        </h4>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 font-semibold">
                          {card.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed text-justify sm:text-left">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-rose-600 dark:bg-zinc-800 dark:hover:bg-rose-600 text-white text-sm font-semibold tracking-wide shadow-md shadow-zinc-900/10 hover:shadow-rose-600/20 transition-all duration-300 active:scale-[0.98] cursor-pointer group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-sm font-semibold tracking-wide border border-zinc-200/90 dark:border-zinc-700 shadow-sm transition-all duration-300 active:scale-[0.98] cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
