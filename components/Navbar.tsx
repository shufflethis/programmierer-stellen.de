
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Terminal, Cpu, Zap, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Entdecken', icon: Search, href: '#jobs' },
    { name: 'Arbeitgeber', icon: Cpu, href: '#employer' },
    { name: 'Ressourcen', icon: Terminal, href: '#career' },
    { name: 'Manifest', icon: Code2, href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-tech-950/80 backdrop-blur-md border-b border-tech-800 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-brand-primary p-2 rounded-lg shadow-lg shadow-brand-primary/20 group-hover:rotate-12 transition-transform">
              <Code2 className="h-6 w-6 text-tech-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xl text-white tracking-tighter leading-none">
                &lt;Dev<span className="text-brand-primary">Jobs</span> /&gt;
              </span>
              <span className="font-mono text-[10px] text-tech-400 tracking-[0.1em] font-semibold uppercase">
                programmierer-stellen.de
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative font-mono text-sm font-medium text-tech-300 hover:text-white transition-colors"
              >
                <span className="text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity">0{navLinks.indexOf(link)+1}.</span> {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-white hover:bg-brand-primary text-tech-950 px-6 py-2 rounded font-bold transition-all duration-300 text-sm flex items-center gap-2">
              <Zap size={16} /> Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-tech-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-tech-900 border-b border-tech-800 shadow-2xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 rounded-xl text-base font-mono text-tech-300 hover:text-white hover:bg-tech-800 transition-all flex items-center space-x-4"
              >
                <link.icon size={20} className="text-brand-primary" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
