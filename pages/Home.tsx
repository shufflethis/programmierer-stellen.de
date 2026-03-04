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
    title: 'Programmierer (m/w/d) (Delphi)',
    company: 'Projekt® Software GmbH',
    location: 'Brackel bei Winsen, Luhe',
    type: 'Vollzeit',
    tags: ['Softwareentwickler/in'],
    postedAt: '2026-03-04'
  },
  {
    id: '2',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Vertriebsstützpunkt Schwerin',
    location: 'Schwerin, Mecklenburg',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-03'
  },
  {
    id: '3',
    title: 'Softwareentwickler (m/w/d)',
    company: 'WeMatch.',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    tags: ['Softwareentwickler/in'],
    postedAt: '2026-03-03'
  },
  {
    id: '4',
    title: 'Programmierer m/w/d',
    company: 'Aboratis',
    location: 'Chemnitz, Sachsen',
    type: 'Vollzeit',
    tags: ['Anwendungsprogrammierer/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '5',
    title: 'Programmierer m/w/d der Gebäudeautomation',
    company: 'Energietechnik Holl GmbH',
    location: 'Cochem',
    type: 'Vollzeit',
    tags: ['Softwareentwickler/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '6',
    title: 'Programmierer (w/m/d)',
    company: 'P & P Handelsgesellschaft mbH',
    location: 'Löbau',
    type: 'Vollzeit',
    tags: ['Assistent/in - Informatik (Softwaretechnik)'],
    postedAt: '2026-03-02'
  },
  {
    id: '7',
    title: 'CAD/CAM - Programmierer (m/w/d)',
    company: 'Tempton Personaldienstleistungen GmbH NL Viechtach',
    location: 'Geiersthal',
    type: 'Vollzeit',
    tags: ['Industriekaufmann/-frau'],
    postedAt: '2026-03-02'
  },
  {
    id: '8',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'DEKRA Arbeit GmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    tags: ['Informatiker/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '9',
    title: 'SPS Programmierer (m/w/d)',
    company: 'JobImpulse Süd GmbH Nürtingen',
    location: 'Winterbach bei Schorndorf, Württ.',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '10',
    title: 'CAM-Programmierer (w/m/d)',
    company: 'Piening GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Industriemechaniker/in - Produktionstechnik'],
    postedAt: '2026-03-02'
  },
  {
    id: '11',
    title: 'SPS Programmierer:in',
    company: 'Baljer & Zembrod GmbH & Co. KG',
    location: 'Altshausen',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '12',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Frankfurt',
    location: 'Glauburg',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '13',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Dresden',
    location: 'Dresden',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '14',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Augsburg',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '15',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Hannover',
    location: 'Hannover',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '16',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Wiesbaden Pharma & Life Science',
    location: 'Wiesbaden',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '17',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Bremen City',
    location: 'Bremen',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '18',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Vertriebsstützpunkt Oelde',
    location: 'Oelde, Westfalen',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '19',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Erfurt',
    location: 'Nordhausen, Thüringen',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '20',
    title: 'NC-Programmierer (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    tags: ['Anwendungsprogrammierer/in'],
    postedAt: '2026-03-01'
  },
  {
    id: '21',
    title: 'Programmierer',
    company: 'Zikon GmbH',
    location: 'Erfurt',
    type: 'Vollzeit',
    tags: ['Konstruktionsmechaniker/in - Feinblechbautechnik'],
    postedAt: '2026-02-27'
  },
  {
    id: '22',
    title: 'Programmierer (m/w/d)',
    company: 'DIS AG Industrie',
    location: 'Pforzheim',
    type: 'Vollzeit',
    tags: ['Fachinformatiker/in - Anwendungsentwicklung'],
    postedAt: '2026-02-27'
  },
  {
    id: '23',
    title: 'Programmierer (m/w/d)',
    company: 'G.I.S. Gesellschaft für Industrieservice',
    location: 'Karlstein am Main',
    type: 'Vollzeit',
    tags: ['Fachinformatiker/in - Anwendungsentwicklung'],
    postedAt: '2026-02-23'
  },
  {
    id: '24',
    title: 'Programmierer (w/m/d)',
    company: 'Brunel GmbH NL Aachen',
    location: 'Aachen',
    type: 'Vollzeit',
    tags: ['Informatiker/in'],
    postedAt: '2026-02-13'
  },
  {
    id: '25',
    title: 'Programmierer (m/w/d)',
    company: 'AlphaConsult KG',
    location: 'Cham, Oberpfalz',
    type: 'Vollzeit',
    tags: ['Systemprogrammierer/in'],
    postedAt: '2026-02-05'
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
