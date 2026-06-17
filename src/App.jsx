import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundBlobs from './components/ui/BackgroundBlobs';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Awards from './components/sections/Awards';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
