import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';
import { education } from '../../data/education';
import { skills } from '../../data/skills';

export default function About() {
  return (
    <Section id="about">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          className="text-blush-400 font-semibold text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Bridging Two Fields
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
          I started in Computer Science, then moved into Biochemistry — not because I changed direction, 
          but because I found where both fields converge. My work sits at the intersection of 
          molecular biology and machine learning.
        </p>
      </div>

      {/* Education timeline */}
      <div className="relative mb-20">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ice-300 via-blush-300 to-ice-300 hidden sm:block" />

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className={`relative flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start md:items-center gap-6 md:gap-12`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 hidden sm:block">
                <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md ${
                  edu.current ? 'bg-blush-400' : 'bg-ice-400'
                }`} />
              </div>

              {/* Card */}
              <div className="flex-1 w-full md:w-auto sm:pl-16 md:pl-0">
                <GlassCard className="relative overflow-hidden">
                  {edu.current && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Current
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ice-100 to-blush-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <GraduationCap size={24} className="text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-lg">{edu.institution}</h3>
                      <p className="font-semibold text-blush-500">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                        <BookOpen size={14} className="mt-0.5 text-ice-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills grid */}
      <div>
        <h3 className="text-2xl font-bold text-navy-900 text-center mb-10">Skills & Technologies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full">
                <h4 className="font-bold text-navy-800 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-ice-50 text-navy-700 border border-ice-200 hover:bg-blush-50 hover:border-blush-200 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
