import { motion } from 'framer-motion'

export const MarqueeBanner = () => {
  const phrase = 'JETAL PATEL , SOFTWARE DEVELOPER'
  const repeatArray = Array(4).fill(phrase)

  return (
    <section id="marquee-banner" className="relative w-full overflow-hidden select-none z-20 bg-transparent pt-8 sm:pt-12 pb-0">
      {/* Angled Marquee Ribbon:
          - Left side top is higher, right side top is lower (rotate-[2.4deg])
          - Background: zinc-800
          - Above this ribbon: 100% transparent (bg-none), Hero section shows through
          - Text: ONLY border/stroke, NO fill color (color: transparent)
      */}
      <div className="relative w-[125vw] -ml-[12.5vw] min-h-[30vh] sm:min-h-[34vh] md:min-h-[38vh] bg-zinc-800 dark:bg-black flex items-center shadow-2xl border-y border-zinc-700/80 dark:border-zinc-800 transform rotate-[2.4deg] z-10 transition-colors duration-300">
        {/* Continuous infinite right-to-left marquee track */}
        <motion.div
          className="flex items-center whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 85,
          }}
        >
          {[...repeatArray, ...repeatArray].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 md:gap-14 mx-4 md:mx-8 shrink-0"
            >
              {/* Outlined text with ONLY border / stroke, NO fill color */}
              <span
                className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight select-none"
                style={{
                  fontFamily: "'Archivo', 'Syne', -apple-system, sans-serif",
                  fontWeight: 900,
                  letterSpacing: '-0.035em',
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.92)',
                  textShadow: '0 0 25px rgba(255, 255, 255, 0.08)',
                }}
              >
                {item}
              </span>

              {/* Accent separator sparkle with red outline border */}
              <span
                className="text-4xl sm:text-6xl md:text-7xl font-black select-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px #e62638',
                }}
              >
                ✦
              </span>
            </div>
          ))}
        </motion.div>

        {/* Solid background attached directly below the ribbon extending downwards */}
        <div className="absolute top-full left-0 w-full h-[600px] bg-[#ECEBE7] dark:bg-black pointer-events-none -z-10 transition-colors duration-300" />
      </div>

      {/* Solid editorial background below the marquee ribbon connecting seamlessly to About section */}
      <div className="relative w-full h-16 sm:h-20 md:h-24 -mt-8 sm:-mt-10 md:-mt-12 bg-[#ECEBE7] dark:bg-black z-0 transition-colors duration-300" />
    </section>
  )
}

export default MarqueeBanner
