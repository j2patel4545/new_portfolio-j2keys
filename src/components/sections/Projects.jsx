import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/utils/gsap'
import { ExternalLink, ArrowRight, ArrowUpRight, Sparkles, FolderGit2 } from 'lucide-react'
import { Github } from '@/components/common/Icons'
import { personalInfo } from '@/data/portfolioData'
import { useProjects } from '@/context/ProjectContext'
import { useSmoothScroll } from '@/hooks/useLenisScroll'

export const Projects = () => {
  const sectionRef = useRef(null)
  const pinWrapperRef = useRef(null)
  const trackRef = useRef(null)
  const progressBarRef = useRef(null)
  const { scrollTo } = useSmoothScroll()
  const { projects } = useProjects()

  // Horizontal ScrollTrigger setup: Pins section and scrolls cards seamlessly from right to left
  useGSAP(
    () => {
      const track = trackRef.current
      const section = sectionRef.current
      const progressBar = progressBarRef.current
      if (!track || !section) return

      // Distance the track needs to translate so all cards are comfortably viewed
      const getScrollAmount = () => {
        const padding = window.innerWidth < 640 ? 48 : 120
        return Math.max(0, track.scrollWidth - window.innerWidth + padding)
      }

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBar) {
              gsap.set(progressBar, { scaleX: self.progress })
            }
          },
        },
      })

      // Ensure layout recalculation after images settle
      const timer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 300)

      return () => {
        clearTimeout(timer)
        tween.kill()
        ScrollTrigger.getAll().forEach(
          (t) => t.trigger === section && t.kill()
        )
      }
    },
    { scope: sectionRef, dependencies: [projects] }
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#ECEBE7] dark:bg-black overflow-hidden select-none transition-colors duration-300"
    >
      {/* Dynamic macOS Desktop-style Ambient Colored Light Orbs for Frosted Glass Refraction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[18%] left-[5%] w-[580px] h-[580px] rounded-full bg-gradient-to-br from-rose-500/25 via-pink-500/15 to-transparent dark:from-rose-500/30 dark:via-pink-500/10 blur-[130px] transform-gpu" />
        <div className="absolute top-[30%] right-[8%] w-[680px] h-[680px] rounded-full bg-gradient-to-tl from-indigo-500/25 via-violet-500/20 to-transparent dark:from-indigo-600/30 dark:via-purple-600/15 blur-[140px] transform-gpu" />
        <div className="absolute bottom-[8%] left-[25%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-sky-400/15 to-transparent dark:from-cyan-500/20 dark:via-sky-400/10 blur-[120px] transform-gpu" />
      </div>

      {/* Pinned Viewport Wrapper - Fluid responsive padding for all screen heights & zoom levels */}
      <div
        ref={pinWrapperRef}
        className="w-full h-screen h-[100dvh] flex flex-col justify-between project-wrapper overflow-hidden relative z-10"
      >
        {/* Header with Title: "Key Projects" & Horizontal Scroll Cue */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-16 flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-800/60 text-rose-700 dark:text-rose-400 text-[11px] font-semibold uppercase tracking-wider mb-1 sm:mb-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Key Projects
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 sm:mt-1 max-w-xl font-normal leading-relaxed line-clamp-1 sm:line-clamp-2">
              A curated showcase of scalable web applications, creative platforms, and full-stack solutions built with high performance standards.
            </p>
          </div>

          {/* Scroll Cue Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full mac-glass-chip shadow-xs text-[11px] sm:text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
            <span>Scroll down to slide right &rarr; left</span>
          </div>
        </div>

        {/* Horizontal Sliding Track (Scrolls from right to left on scroll) */}
        <div className="w-full overflow-hidden my-auto py-1 sm:py-2">
          <div
            ref={trackRef}
            className="flex items-stretch gap-4 sm:gap-6 md:gap-8 px-6 sm:px-12 md:px-16 w-max will-change-transform transform-gpu"
          >
            {projects.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, '0')
              const displayDomain = project.domain || `${project.id}.app`

              return (
                <div
                  key={project.id}
                  className="group mac-glass-window project-card rounded-2xl sm:rounded-3xl flex flex-col justify-between overflow-hidden shrink-0"
                >
                  {/* macOS Window Chrome Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 border-b border-black/[0.06] dark:border-white/[0.08] bg-white/40 dark:bg-zinc-800/60">
                    {/* Traffic Light Dots */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] inline-block transition-transform duration-200 group-hover:scale-105" />
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] inline-block transition-transform duration-200 group-hover:scale-105" />
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] inline-block transition-transform duration-200 group-hover:scale-105" />
                    </div>

                    {/* macOS Center Address Pill / Index */}
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full mac-glass-chip text-[10px] sm:text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                      <span className="text-rose-500 font-bold">{projectNumber}</span>
                      <span className="text-zinc-300 dark:text-zinc-600">/</span>
                      <span className="font-medium tracking-tight text-zinc-700 dark:text-zinc-300 truncate max-w-[130px] sm:max-w-[180px]">{displayDomain}</span>
                    </div>

                    {/* macOS Top Right Window Actions */}
                    <div className="flex items-center gap-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          title="View Repository"
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors"
                        >
                          <Github className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          title="Open Application"
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors"
                        >
                          <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Embedded Project Visual Container (MacBook Screen Canvas - Standard 1.88:1 Aspect Ratio) */}
                  <div className="p-2.5 sm:p-3 pb-0">
                    <div 
                      className="relative w-full aspect-[1.88/1] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900/10 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08]"
                      style={{ aspectRatio: '1.88 / 1' }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle gradient overlay to enhance contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Frosted Category Badge */}
                      <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/85 dark:bg-zinc-800/90 backdrop-blur-md border border-white/60 dark:border-white/10 text-zinc-900 dark:text-zinc-100 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          {project.category}
                        </span>
                      </div>

                      {/* Featured Tag (if applicable) */}
                      {project.featured && (
                        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5">
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-600/90 text-white backdrop-blur-md shadow-sm border border-rose-400/30">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-3.5 sm:p-4 md:p-4.5 flex flex-col justify-between flex-grow space-y-2.5 sm:space-y-3">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-200 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1 line-clamp-2 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Minimal Tech Stack Chips & Action Link */}
                    <div className="pt-2 sm:pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 max-w-[70%]">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="mac-glass-chip px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg mac-glass-chip hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white text-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs font-semibold transition-all duration-200 shrink-0 group/btn"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Ending "View All Projects" Card in the horizontal track */}
            <div className="mac-glass-window project-card-archive rounded-2xl sm:rounded-3xl p-0 flex flex-col justify-between shrink-0 group overflow-hidden">
              {/* macOS Window Chrome */}
              <div className="flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 border-b border-black/[0.06] dark:border-white/[0.08] bg-white/40 dark:bg-zinc-800/60">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] inline-block" />
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full mac-glass-chip text-[10px] sm:text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                  <span className="text-rose-500 font-bold">git</span>
                  <span className="text-zinc-300 dark:text-zinc-600">/</span>
                  <span>archive.sh</span>
                </div>

                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded-full mac-glass-chip font-semibold">
                  Archive
                </span>
              </div>

              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl mac-glass-chip text-rose-500 dark:text-rose-400 flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-snug group-hover:text-rose-500 transition-colors">
                      View All Projects
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mt-1 line-clamp-2 sm:line-clamp-3">
                      Explore my complete repository archive including production applications, client deliverables, and open-source libraries.
                    </p>
                  </div>

                  {/* Metrics in macOS frosted widgets */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <div className="p-2 sm:p-2.5 rounded-lg mac-glass-chip">
                      <div className="text-base sm:text-xl font-extrabold text-zinc-900 dark:text-white">25+</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Total Built</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-lg mac-glass-chip">
                      <div className="text-base sm:text-xl font-extrabold text-zinc-900 dark:text-white">15+</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Repositories</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <a
                    href={personalInfo.github || 'https://github.com/j2patel4545'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold tracking-wide transition-all duration-300 shadow-md shadow-rose-600/25 active:scale-98 group/btn"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Explore All on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Progress Bar */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between gap-4 shrink-0 pt-1 sm:pt-2">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            01 / {String(projects.length).padStart(2, '0')} PROJECTS
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md h-1.5 bg-zinc-300/80 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-rose-600 rounded-full origin-left scale-x-0 transition-transform duration-75"
            />
          </div>

          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            END
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
