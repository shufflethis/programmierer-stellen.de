
import React from 'react';
import { SectionContent } from '../types';

interface Props {
  content: SectionContent;
  id: string;
  className?: string;
}

const ContentSection: React.FC<Props> = ({ content, id, className = "" }) => {
  return (
    <section id={id} className={`py-24 lg:py-40 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-24 items-center ${content.imageSide === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className={`flex-1 ${content.imageSide === 'none' ? 'lg:max-w-4xl lg:mx-auto lg:text-center' : ''}`}>
            <h2 className="text-4xl lg:text-6xl font-sans font-extrabold text-white mb-12 leading-none tracking-tighter">
              {content.title}
            </h2>
            
            <div className="space-y-10 text-tech-400 text-lg leading-relaxed">
              {content.paragraphs.map((paragraph, index) => (
                <div key={index} className="flex gap-6">
                   {content.imageSide !== 'none' && (
                     <div className="w-1 h-auto bg-tech-800 rounded-full flex-shrink-0 group-hover:bg-brand-primary transition-colors"></div>
                   )}
                   <p className="relative">
                    {paragraph}
                   </p>
                </div>
              ))}
            </div>
          </div>

          {content.imageSide !== 'none' && content.imageUrl && (
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video border border-tech-800">
                  <img 
                    src={content.imageUrl} 
                    alt={content.imageAlt} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-tech-950/20"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
