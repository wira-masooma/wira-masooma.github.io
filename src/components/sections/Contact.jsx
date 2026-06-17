import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/BrandIcons';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <Section id="contact">
      <div className="text-center">
        <motion.p
          className="text-blush-400 font-semibold text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Let's Connect
        </h2>
        <p className="max-w-xl mx-auto text-slate-500 text-lg mb-10 leading-relaxed">
          Whether it's research collaboration, a project opportunity, or just a conversation about 
          computational biology — I'd love to hear from you.
        </p>

        <motion.div
          className="glass rounded-2xl max-w-lg mx-auto p-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blush-200 to-ice-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Mail size={20} className="text-navy-700" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium">Email</p>
                <p className="text-navy-800 font-semibold">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ice-200 to-blush-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <LinkedinIcon size={20} className="text-navy-700" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                <p className="text-navy-800 font-semibold">Wira Masooma Zaidi</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blush-200 to-ice-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <GithubIcon size={20} className="text-navy-700" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium">GitHub</p>
                <p className="text-navy-800 font-semibold">wiramasooma</p>
              </div>
            </a>
          </div>
        </motion.div>

        <Button href={`mailto:${profile.email}`}>
          <Send size={18} />
          Say Hello
        </Button>
      </div>
    </Section>
  );
}
