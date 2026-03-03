// HR-UPDATER: v1.0

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import ApplicationModal from '../components/ApplicationModal';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import { JobListing } from '../types';
import { searchSection, employerSection, applicantSection, aboutSection } from '../data/content';
import { Search, MapPin, Filter, Terminal, Code2 } from 'lucide-react';

const SAMPLE_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Senior Fullstack Engineer (m/w/d)',
    company: 'FinTech Revolution GmbH',
    location: 'Berlin / Remote',
    type: 'Vollzeit',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    postedAt: 'T-Minus 2h'
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Architect',
    company: 'SkyScale Systems',
    location: 'München / Hybride',
    type: 'Vollzeit',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Go'],
    postedAt: 'T-Minus 5h'
  },
  {
    id: '3',
    title: 'Backend Developer (Rust/Go)',
    company: 'Cryptic Security',
    location: 'Remote',
    type: 'Freelance',
    tags: ['Rust', 'gRPC', 'WebAssembly', 'Solana'],
    postedAt: 'T-Minus 1d'
  },
  {
    id: '4',
    title: 'Frontend Lead Developer',
    company: 'Creative Studio 22',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: ['Next.js', 'Tailwind', 'Three.js', 'Framer Motion'],
    postedAt: 'T-Minus 2d'
  },
  {
    id: '5',
    title: 'DevOps Engineer / SRE',
    company: 'Retail Cloud Services',
    location: 'Düsseldorf / Remote',
    type: 'Teilzeit',
    tags: ['Docker', 'Prometheus', 'CI/CD', 'Python'],
    postedAt: 'T-Minus 4d'
  }
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-tech-950 min-h-screen text-tech-100 font-sans selection:bg-brand-primary selection:text-tech-950">
      <Navbar />
      
      <main>
        <Hero />

        {/* Search & Filter Bar */}
        <div id="jobs" className="sticky top-0 z-30 bg-tech-950/90 backdrop-blur-xl border-y border-tech-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full relative group">
                <Terminal className="absolute left-5 top-1/2 transform -translate-y-1/2 text-tech-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Stack filter (e.g. React, Rust, K8s)..." 
                  className="w-full bg-tech-900 border border-tech-800 rounded-lg py-4 pl-14 pr-6 text-white placeholder-tech-600 focus:bg-tech-950 focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/5 transition-all font-mono"
                />
              </div>
              <div className="w-full lg:w-1/4 relative group">
                <MapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 text-tech-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Region / Remote" 
                  className="w-full bg-tech-900 border border-tech-800 rounded-lg py-4 pl-14 pr-6 text-white placeholder-tech-600 focus:bg-tech-950 focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/5 transition-all font-mono"
                />
              </div>
              <button className="w-full lg:w-auto bg-brand-primary hover:bg-white text-tech-950 font-bold py-4 px-10 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-tighter">
                Execute Search
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <section className="py-24 bg-tech-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 text-brand-primary mb-2 font-mono font-bold uppercase tracking-widest text-xs">
                  <Code2 size={16} />
                  grep 'high_priority' roles
                </div>
                <h2 className="text-4xl font-sans font-extrabold text-white">Engineering Jobs</h2>
              </div>
              <div className="flex items-center gap-4 bg-tech-900 p-1 rounded border border-tech-800">
                <button className="px-4 py-1.5 rounded bg-tech-800 text-brand-primary font-mono text-xs font-bold">LATEST</button>
                <button className="px-4 py-1.5 rounded text-tech-500 font-mono text-xs font-bold hover:text-white transition-colors">MATCHES</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {SAMPLE_JOBS.map(job => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="font-mono text-sm text-tech-500 hover:text-brand-primary transition-colors underline underline-offset-8 decoration-tech-800 hover:decoration-brand-primary">
                View more results in history.log
              </button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="bg-tech-950">
          <ContentSection id="search-info" content={searchSection} className="border-t border-tech-900" />
          <ContentSection id="employer" content={employerSection} className="bg-tech-900/20" />
          <ContentSection id="career" content={applicantSection} />
          <ContentSection id="about" content={aboutSection} className="bg-tech-900/50" />
        </div>
      </main>

      <Footer />

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />
    </div>
  );
};

export default Home;
