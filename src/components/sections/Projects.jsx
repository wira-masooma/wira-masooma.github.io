import { motion } from 'framer-motion';
import { FlaskConical, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';
import Tag from '../ui/Tag';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <motion.p
          className="text-blush-400 font-semibold text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Research & Projects
        </motion.p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          The Centerpiece
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg">
          Computational biology projects at the frontier of molecular prediction and structural analysis.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <GlassCard className="relative overflow-hidden group">
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-blush-300 to-blush-200 text-navy-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-sm">
                    ★ Featured
                  </div>
                </div>
              )}

              {/* Decorative gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-ice-400 via-blush-300 to-ice-400 rounded-full" />

              <div className="pl-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ice-200 to-blush-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <FlaskConical size={24} className="text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-xl leading-snug">{project.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-blush-500 font-semibold text-sm">{project.org}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar size={12} /> {project.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 leading-relaxed mb-5">{project.summary}</p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                      <ChevronRight size={14} className="mt-0.5 text-blush-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech} className="bg-blush-50 text-blush-500 border-blush-200">
                      {tech}
                    </Tag>
                  ))}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1 text-sm font-semibold text-ice-500 hover:text-blush-500 transition-colors"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
