
import React from 'react';
import { Terminal, ArrowRight, Zap, Code, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-tech-950">
      {/* Matrix-like decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-full blur-[160px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-secondary/5 rounded-full blur-[140px] translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-tech-900 border border-tech-800 text-brand-primary animate-pulse">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">System Ready: Find your Next Stack</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-sans font-extrabold text-white leading-[0.9] tracking-tighter">
              Commit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">To Excellence.</span>
            </h1>

            <p className="text-xl text-tech-400 max-w-xl font-medium leading-relaxed">
              Die spezialisierte Plattform für Software-Engineering. Wir verbinden technisches Talent mit den innovativsten Codebases in Deutschland.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#jobs" className="px-10 py-4 bg-brand-primary hover:bg-white text-tech-950 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/20">
                Jobs explorieren <ArrowRight size={22} />
              </a>
              <a href="#employer" className="px-10 py-4 glass-card text-white hover:bg-tech-800 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3">
                <Code size={20} className="text-brand-secondary" /> Für Unternehmen
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">4.2k+</span>
                <span className="text-xs text-tech-500 font-mono uppercase tracking-widest">Active Roles</span>
              </div>
              <div className="h-10 w-px bg-tech-800"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">120+</span>
                <span className="text-xs text-tech-500 font-mono uppercase tracking-widest">Tech Stacks</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="glass-card p-4 rounded-xl border border-tech-700 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 font-mono text-sm leading-relaxed overflow-hidden">
              <div className="flex items-center gap-2 border-b border-tech-800 pb-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="text-tech-500 text-xs">career_path.tsx</span>
              </div>
              <div className="space-y-1">
                <p><span className="syntax-keyword">import</span> {'{ developer }'} <span className="syntax-keyword">from</span> <span className="syntax-string">'@future'</span>;</p>
                <p><span className="syntax-keyword">const</span> <span className="text-blue-400">NextJob</span> = () =&gt; {'{'}</p>
                <p className="pl-4"><span className="syntax-comment">// Target: High Scale Infrastructure</span></p>
                <p className="pl-4"><span className="syntax-keyword">return</span> (</p>
                <p className="pl-8">&lt;<span className="text-brand-primary">Growth</span> remote={<span className="text-amber-400">true</span>} stack={<span className="syntax-string">'Go'</span>} /&gt;</p>
                <p className="pl-4">);</p>
                <p>{'};'}</p>
                <p className="syntax-comment">// Build something that matters.</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-primary/20 blur-3xl rounded-full"></div>
            </div>
            
            <div className="absolute -top-12 -left-12 p-6 glass-card rounded-2xl animate-bounce shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-secondary/20 rounded-lg">
                  <Zap className="text-brand-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-tech-400 font-bold uppercase tracking-widest">New Matching Role</p>
                  <p className="text-white font-bold text-sm">Staff Engineer (Node.js)</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-10 p-6 glass-card rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-primary/20 rounded-lg">
                  <ShieldCheck className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-tech-400 font-bold uppercase tracking-widest">Verified Stack</p>
                  <p className="text-white font-bold text-sm">Kubernetes & Terraform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
