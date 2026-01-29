
import React, { useState } from 'react';
import { X, Github, Send, CheckCircle, Terminal } from 'lucide-react';
import { ModalProps } from '../types';

const ApplicationModal: React.FC<ModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-tech-950/90 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl glass-card rounded-xl overflow-hidden animate-fade-in">
        <div className="px-8 py-6 border-b border-tech-800 flex justify-between items-center bg-tech-900/50">
          <div className="flex items-center gap-3">
            <Terminal size={20} className="text-brand-primary" />
            <div>
              <h3 className="text-lg font-mono font-bold text-white uppercase tracking-tighter">apply_job.sh</h3>
              <p className="text-brand-secondary text-xs font-mono">TARGET: {jobTitle || 'unspecified_role'}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-tech-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-tech-500 uppercase font-bold tracking-widest">User_Firstname</label>
                  <input required type="text" className="w-full bg-tech-900 border border-tech-800 rounded p-4 text-white focus:border-brand-primary outline-none transition-all" placeholder="e.g. Linus" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-tech-500 uppercase font-bold tracking-widest">User_Lastname</label>
                  <input required type="text" className="w-full bg-tech-900 border border-tech-800 rounded p-4 text-white focus:border-brand-primary outline-none transition-all" placeholder="e.g. Torvalds" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-tech-500 uppercase font-bold tracking-widest">Mail_Endpoint</label>
                <input required type="email" className="w-full bg-tech-900 border border-tech-800 rounded p-4 text-white focus:border-brand-primary outline-none transition-all" placeholder="linus@linux.org" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-tech-500 uppercase font-bold tracking-widest">GitHub_Profile_Link</label>
                <div className="relative">
                  <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-tech-500" size={18} />
                  <input type="url" className="w-full bg-tech-900 border border-tech-800 rounded p-4 pl-12 text-white focus:border-brand-primary outline-none transition-all" placeholder="github.com/yourhandle" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-tech-500 uppercase font-bold tracking-widest">Stack_Summary_&_Motivation</label>
                <textarea rows={3} className="w-full bg-tech-900 border border-tech-800 rounded p-4 text-white focus:border-brand-primary outline-none transition-all resize-none" placeholder="Brief technical intro..."></textarea>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="text-[9px] text-tech-600">
                  // Connection: Encrypted (TLS 1.3)
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-brand-primary hover:bg-white text-tech-950 font-bold py-4 px-10 rounded uppercase tracking-tighter transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Pushing Data...' : 'Submit PR'} <Send size={18} />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-16 animate-fade-in font-mono">
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-primary/20">
                <CheckCircle className="h-10 w-10 text-brand-primary" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Pipeline Succeeded</h4>
              <p className="text-tech-400 mb-10 max-w-xs mx-auto text-sm leading-relaxed">
                Deine Bewerbung wurde erfolgreich in das System integriert. Das Team wird sich in Kürze melden.
              </p>
              <button 
                onClick={onClose}
                className="bg-tech-800 hover:bg-tech-700 text-white font-bold py-3 px-8 rounded transition-all"
              >
                Close Connection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
