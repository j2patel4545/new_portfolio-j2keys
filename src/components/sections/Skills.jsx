import { SectionHeader } from '@/components/common/SectionHeader'
import { skillCategories } from '@/data/portfolioData'
import {
  Atom,
  Code2,
  Palette,
  Sparkles,
  Activity,
  Layers,
  Server,
  Database,
  HardDrive,
  Cpu,
  Box,
  GitBranch,
  Smartphone,
  Zap,
  FileCode,
  Table,
  Globe,
  CheckCircle2,
  Shield,
  Lock,
  Key,
  Mail,
  Radio,
  Terminal,
  Cloud,
  Workflow,
  Settings,
} from 'lucide-react'
import { Github, Figma } from '@/components/common/Icons'

// Icon mapping dictionary covering full MERN, DevOps, Database & Frontend toolchain
const iconMap = {
  Atom,
  Code2,
  Palette,
  Sparkles,
  Activity,
  Layers,
  Server,
  Database,
  HardDrive,
  Cpu,
  Box,
  Figma,
  GitBranch,
  Smartphone,
  Zap,
  FileCode,
  Table,
  Globe,
  CheckCircle2,
  Shield,
  Lock,
  Key,
  Mail,
  Radio,
  Terminal,
  Cloud,
  Workflow,
  Settings,
  Github,
}

export const Skills = () => {
  // Speed variations tuned for 30 items per track (smooth, elegant, and readable)
  const speeds = ['48s', '56s', '46s']

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#ECEBE7] dark:bg-black transition-colors duration-300 overflow-hidden">
      {/* Subtle ambient radial glow in dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow opacity-50 pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-6xl mx-auto px-6 mb-12 sm:mb-16">
        <SectionHeader
          badgeText="Tech Stack"
          title="Tools & Technologies"
          subtitle="An interactive overview of modern frontend engineering, backend architecture, security, cloud infrastructure, and databases."
        />
      </div>

      {/* Rotated Marquee Viewport */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Soft edge fade masks on Left and Right */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-[#ECEBE7] dark:from-black to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-[#ECEBE7] dark:from-black to-transparent z-20" />

        {/* Angled Marquees Container (GPU accelerated, zero blur overhead for 60-120fps smoothness) */}
        <div className="w-[120vw] -ml-[10vw] transform-gpu -rotate-2 sm:-rotate-[2deg] flex flex-col gap-4 sm:gap-5 py-4">
          {skillCategories.map((categoryGroup, index) => {
            // Direction: 1st RTL, 2nd LTR, 3rd RTL
            const isRtl = categoryGroup.direction === 'rtl' || index % 2 === 0
            const animationClass = isRtl ? 'animate-marquee-rtl' : 'animate-marquee-ltr'
            const duration = speeds[index % speeds.length]

            // Duplicated once for seamless infinite 50% translation loop (30 items per track)
            const fullTrackSkills = [...categoryGroup.skills, ...categoryGroup.skills]

            return (
              <div
                key={index}
                className="marquee-track overflow-hidden w-full relative group/track"
              >
                <div
                  className={`${animationClass} flex items-center gap-3.5 sm:gap-4.5 py-1`}
                  style={{ animationDuration: duration }}
                >
                  {fullTrackSkills.map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill.icon] || Code2
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 px-4 py-2.5 sm:px-4.5 sm:py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 cursor-pointer shrink-0 group/card"
                      >
                        {/* Tech Icon Container */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover/card:text-rose-600 dark:group-hover/card:text-rose-400">
                          <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>

                        {/* Tech Info */}
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight group-hover/card:text-rose-600 dark:group-hover/card:text-rose-400 whitespace-nowrap">
                              {skill.name}
                            </span>
                            {skill.level === 'Expert' && (
                              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded font-mono text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60">
                                Expert
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[10px] sm:text-[11px] font-mono font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                              {skill.tag || 'Tech'}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                            <span className="text-[10px] sm:text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Subtle bottom info bar */}
      <div className="max-w-6xl mx-auto px-6 mt-10 sm:mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/90 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
            Hover over any technology to pause & explore
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills
