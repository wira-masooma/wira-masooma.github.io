import { Heart, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/BrandIcons';
import { profile } from '../../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ice-300 to-blush-300 flex items-center justify-center text-white font-bold text-xs shadow-md">
              W
            </div>
            <span className="font-bold text-navy-800">
              Wira Masooma Zaidi
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-blush-500 hover:bg-white/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-blush-500 hover:bg-white/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-blush-500 hover:bg-white/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400 flex items-center gap-1">
            © {currentYear} — Made with <Heart size={14} className="text-blush-400 fill-blush-400" /> by Wira
          </p>
        </div>
      </div>
    </footer>
  );
}
