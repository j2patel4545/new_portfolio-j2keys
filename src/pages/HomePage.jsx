import { Hero } from '@/components/sections/Hero'
import { MarqueeBanner } from '@/components/sections/MarqueeBanner'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

export const HomePage = () => {
  return (
    <>
      {/* Fixed Hero Section underneath - stays pinned in its place */}
      <div className="fixed inset-0 w-full h-[100dvh] z-0 overflow-hidden">
        <Hero />
      </div>

      {/* Scrolling Content Container - slides UP over the Hero as user scrolls */}
      <div className="relative z-10 mt-[100dvh] w-full">
        {/* Angled Marquee: Transparent above so Hero is visible right up to the ribbon */}
        <MarqueeBanner />

        {/* Subsequent sections with solid editorial background below the marquee */}
        <div className="bg-[#ECEBE7] dark:bg-black w-full transition-colors duration-300">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default HomePage
