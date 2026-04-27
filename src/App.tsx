import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* Projects and Contact coming next */}
      <section id="projects" className="py-24 text-center bg-zinc-900">
        <h2 className="text-5xl font-semibold mb-8">Projects</h2>
        <p className="text-zinc-400">We'll build beautiful animated project cards here next</p>
      </section>

      <section id="contact" className="py-24 text-center">
        <h2 className="text-5xl font-semibold mb-8">Get In Touch</h2>
        <p className="text-zinc-400">Contact form coming soon</p>
      </section>
    </div>
  );
}

export default App;