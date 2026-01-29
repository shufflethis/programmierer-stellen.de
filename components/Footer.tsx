
import React from 'react';
import { Code2, Github, Linkedin, Twitter, Terminal, Cpu, Database, Server } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-tech-950 text-tech-400 pt-24 pb-12 border-t border-tech-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 font-mono">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-tech-950" />
              </div>
              <span className="font-bold text-xl text-white tracking-tighter">
                &lt;DevJobs /&gt;
              </span>
            </div>
            <p className="text-xs leading-relaxed uppercase tracking-widest opacity-60">
              Accelerating tech careers in DACH since 2024. Building the bridge between code and company.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-tech-900 rounded-lg hover:text-brand-primary transition-all"><Github size={18} /></a>
              <a href="#" className="p-2 bg-tech-900 rounded-lg hover:text-brand-primary transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-tech-900 rounded-lg hover:text-brand-primary transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <Terminal size={14} className="text-brand-primary" /> API_Endpoints
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#jobs" className="hover:text-brand-primary transition-colors">/browse_jobs</a></li>
              <li><a href="#employer" className="hover:text-brand-primary transition-colors">/employer_portal</a></li>
              <li><a href="#career" className="hover:text-brand-primary transition-colors">/documentation</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">/salary_checker</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <Database size={14} className="text-brand-secondary" /> Microservices
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Auth_Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Job_Matching_v2</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Salary_Estimator</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Skills_GraphQL</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <Server size={14} className="text-brand-accent" /> System_Info
            </h4>
            <div className="p-4 bg-tech-900 rounded-lg border border-tech-800 space-y-3">
               <div className="flex justify-between items-center text-[9px]">
                 <span>STATUS:</span>
                 <span className="text-brand-primary">OPERATIONAL</span>
               </div>
               <div className="flex justify-between items-center text-[9px]">
                 <span>LATENCY:</span>
                 <span>24ms</span>
               </div>
               <div className="flex justify-between items-center text-[9px]">
                 <span>REGION:</span>
                 <span>EU-DE-1</span>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-tech-900 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-tech-600 text-[10px] uppercase font-bold tracking-[0.2em] font-mono">
            © 2024 programmierer-stellen.de // All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-tech-600 font-mono">
            <span>Impressum</span>
            <span>Privacy</span>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
