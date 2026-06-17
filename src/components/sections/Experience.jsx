import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';
import Tag from '../ui/Tag';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <motion.p
          className="text-blush-400 font-semibold text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience & Leadership
        </motion.p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Where I've Made Impact
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg">
          From data science to product management — building things that matter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.title + exp.org}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <GlassCard className="h-full flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blush-100 to-ice-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Briefcase size={20} className="text-navy-700" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-navy-900 text-lg leading-snug">{exp.title}</h3>
                  <p className="text-blush-500 font-semibold text-sm">{exp.org}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {exp.location}
                </span>
              </div>

              <p className="text-sm text-slate-500 mb-4 leading-relaxed">{exp.summary}</p>

              <ul className="space-y-2 mb-5 flex-1">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                    <ChevronRight size={14} className="mt-0.5 text-blush-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/40">
                {exp.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
