import { motion } from 'framer-motion'
import { Briefcase, Calendar, GraduationCap } from 'lucide-react'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Card } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { experience } from '@/data/portfolioData'

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-28 px-6 relative bg-[#ECEBE7] dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badgeText="Career Path"
          title="Experience & Education"
          subtitle="A chronological timeline of professional engineering experience, industry roles, and academic degrees."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l border-zinc-300 dark:border-zinc-800 space-y-10 md:space-y-12">
          {experience.map((item, index) => {
            const isEducation = Boolean(item.educationList)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Marker */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-800 border-2 border-rose-600 group-hover:bg-rose-600 group-hover:scale-125 transition-all shadow-xs" />

                <Card className="p-6 md:p-8 bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/80 shadow-sm transition-all duration-300 group-hover:border-zinc-300 dark:group-hover:border-zinc-600">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mt-1">
                        {isEducation ? (
                          <GraduationCap className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        ) : (
                          <Briefcase className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        )}
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Education Cards Grid for Item 3 */}
                  {item.educationList && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                      {item.educationList.map((edu, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between gap-2.5 transition-all hover:border-rose-400/40"
                        >
                          <div>
                            <span
                              className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${
                                edu.status === 'Ongoing'
                                  ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-300/60 dark:border-rose-800/60 animate-pulse'
                                  : 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                              }`}
                            >
                              {edu.status}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                              {edu.degree}
                            </h4>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-1 border-t border-zinc-200/50 dark:border-zinc-800/60">
                            <Calendar className="w-3 h-3 text-rose-500" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
