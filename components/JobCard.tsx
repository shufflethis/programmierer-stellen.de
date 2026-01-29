
import React from 'react';
import { MapPin, Box, Cpu, ChevronRight, Binary } from 'lucide-react';
import { JobListing } from '../types';

interface Props {
  job: JobListing;
  onApply: (title: string) => void;
}

const JobCard: React.FC<Props> = ({ job, onApply }) => {
  return (
    <div className="group relative glass-card p-8 rounded-xl transition-all duration-500 hover:border-brand-primary/50 hover:bg-tech-900/80 hover:-translate-y-1">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded bg-tech-800 text-brand-primary text-[10px] font-mono font-bold uppercase tracking-wider border border-tech-700">
              {job.type}
            </span>
            <span className="text-[10px] font-mono text-tech-500 font-medium">
              STAMP: {job.postedAt}
            </span>
          </div>
          
          <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-brand-primary transition-colors flex items-center gap-3">
            <Binary size={24} className="text-tech-600 group-hover:text-brand-primary/40" />
            {job.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-tech-400 mb-6">
            <div className="flex items-center gap-2">
              <Box size={16} className="text-brand-secondary" />
              {job.company}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-secondary" />
              {job.location}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1.5 font-mono text-[11px] px-3 py-1 bg-tech-950 text-tech-300 rounded border border-tech-800 group-hover:border-brand-primary/20 transition-all">
                <span className="text-brand-primary">$</span> {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-3 w-full lg:w-auto">
          <button 
            onClick={() => onApply(job.title)}
            className="w-full lg:w-auto px-8 py-3 bg-white text-tech-950 font-bold text-sm tracking-tighter uppercase rounded hover:bg-brand-primary transition-all flex items-center justify-center gap-2 shadow-xl"
          >
            Deploy Application
            <ChevronRight size={18} />
          </button>
          <p className="text-center font-mono text-[9px] text-tech-600 font-bold uppercase tracking-widest">
            Source code check required
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
