import { Linkedin, Github, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5e6c8] text-[#1a2e1a] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-8">
        <a href="/" className="text-xl font-bold hover:text-[#2d4a2d] transition-colors">Tayo Makinde</a>
        <nav className="flex gap-8 text-sm">
          <a href="/resume" className="hover:text-[#2d4a2d] transition-colors">RESUME</a>
          <a href="/technical" className="hover:text-[#2d4a2d] transition-colors">TECHNICAL</a>
          <a href="/personal" className="hover:text-[#2d4a2d] transition-colors">PERSONAL</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 pt-48 pb-16">
        {/* Profile Picture */}
        <img
          src="/Tayo Makinde Headshot.png"
          alt="Tayo Makinde"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#2d4a2d]"
        />

        {/* Welcome Text */}
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Welcome to my portfolio</h2>
          <p className="text-lg leading-relaxed mb-8 text-[#4a4a4a]">
            If you're here, you're either a potential employer or you just clicked a random link. Either way, welcome! I'm Tayo, a Computer Engineering student at Brown who tries to build things I find actually useful. Feel free to explore my <a href="/technical" className="underline hover:text-[#2d4a2d]">technical projects</a>, check out my <a href="/resume" className="underline hover:text-[#2d4a2d]">resume</a>, or check out what I'm up to <a href="/personal" className="underline hover:text-[#2d4a2d]">when I'm not coding</a>.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="https://www.linkedin.com/in/tayo-makinde-1b4405304/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#2d4a2d] transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/makinde-tayo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#2d4a2d] transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="mailto:tayomakinde27@gmail.com" className="flex items-center gap-2 hover:text-[#2d4a2d] transition-colors">
              <Mail size={20} />
              tayomakinde27@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
