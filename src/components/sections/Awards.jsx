import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Lightbulb } from 'lucide-react';
import Section from '../layout/Section';
import { awards } from '../../data/awards';

const iconMap = {
  trophy: Trophy,
  award: Award,
  star: Star,
  medal: Medal,
  lightbulb: Lightbulb,
};

export default function Awards() {
  return (
    <Section id="awards" full>
      <div className="relative overflow-hidden">
        {/* Full-width gradient band */}
        <div className="absolute inset-0 gradient-blush opacity-30" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <motion.p
              className="text-blush-500 font-semibold text-sm tracking-widest uppercase mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Recognition
            </motion.p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Awards & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => {
              const Icon = iconMap[award.icon] || Trophy;
              return (
                <motion.div
                  key={award.title}
                  className="glass rounded-2xl p-6 text-center group hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blush-200 to-ice-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon size={26} className="text-navy-800" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{award.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{award.description}</p>
                  <span className="inline-block text-xs font-semibold text-blush-500 bg-blush-50 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
