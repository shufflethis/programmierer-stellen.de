// HR-UPDATER: v1.0

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import ApplicationModal from '../components/ApplicationModal';
import ContentSection from '../components/ContentSection';
import GermanCitiesGeo from '../components/geo/GermanCitiesGeo';
import Footer from '../components/Footer';
import { JobListing } from '../types';
import { searchSection, employerSection, applicantSection, aboutSection } from '../data/content';
import { Search, MapPin, Filter, Terminal, Code2, ChevronDown, ChevronUp, GraduationCap, TrendingUp, Briefcase } from 'lucide-react';

const SAMPLE_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '2',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '3',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '4',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '5',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '6',
    title: 'SPS-Programmierer (w/m/d)',
    company: 'Personalhaus EXPERT',
    location: 'Bielefeld',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-07'
  },
  {
    id: '7',
    title: 'SPS Programmierer (m/w/d)',
    company: 'Personalhaus EXPERT',
    location: 'Bielefeld',
    type: 'Vollzeit',
    tags: ['SPS-Ingenieur/in'],
    postedAt: '2026-03-07'
  },
  {
    id: '8',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'dosmatix GmbH',
    location: 'Hausen, Niederbayern',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-06'
  },
  {
    id: '9',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Aachen AF Haus 3. OG',
    location: 'Aachen',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-06'
  },
  {
    id: '10',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Bielefeld',
    location: 'Bielefeld',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-06'
  },
  {
    id: '11',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'Alpha-Engineering KG - Erfurt',
    location: 'Erfurt',
    type: 'Vollzeit',
    tags: ['SPS-Ingenieur/in'],
    postedAt: '2026-03-06'
  },
  {
    id: '12',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Friedrichshafen',
    location: 'Wangen im Allgäu',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-05'
  },
  {
    id: '13',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'DEKRA Arbeit GmbH',
    location: 'Heidenheim an der Brenz',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-05'
  },
  {
    id: '14',
    title: 'Programmierer (m/w/d)',
    company: 'KRÖNING – Automation GmbH & Co. KG',
    location: 'Dohna, Sachsen',
    type: 'Vollzeit',
    tags: ['Ingenieur/in - Mechatronik'],
    postedAt: '2026-03-04'
  },
  {
    id: '15',
    title: 'Programmierer (m/w/d) (Delphi)',
    company: 'Projekt® Software GmbH',
    location: 'Brackel bei Winsen, Luhe',
    type: 'Vollzeit',
    tags: ['Softwareentwickler/in'],
    postedAt: '2026-03-04'
  },
  {
    id: '16',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'FERCHAU GmbH Vertriebsstützpunkt Schwerin',
    location: 'Schwerin, Mecklenburg',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-03'
  },
  {
    id: '17',
    title: 'Softwareentwickler (m/w/d)',
    company: 'WeMatch.',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    tags: ['Softwareentwickler/in'],
    postedAt: '2026-03-03'
  },
  {
    id: '18',
    title: 'Programmierer m/w/d',
    company: 'Aboratis',
    location: 'Chemnitz, Sachsen',
    type: 'Vollzeit',
    tags: ['Anwendungsprogrammierer/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '19',
    title: 'Programmierer m/w/d der Gebäudeautomation',
    company: 'Energietechnik Holl GmbH',
    location: 'Cochem',
    type: 'Vollzeit',
    tags: ['Softwareentwickler/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '20',
    title: 'Programmierer (w/m/d)',
    company: 'P & P Handelsgesellschaft mbH',
    location: 'Löbau',
    type: 'Vollzeit',
    tags: ['Assistent/in - Informatik (Softwaretechnik)'],
    postedAt: '2026-03-02'
  },
  {
    id: '21',
    title: 'CAD/CAM - Programmierer (m/w/d)',
    company: 'Tempton Personaldienstleistungen GmbH NL Viechtach',
    location: 'Geiersthal',
    type: 'Vollzeit',
    tags: ['Industriekaufmann/-frau'],
    postedAt: '2026-03-02'
  },
  {
    id: '22',
    title: 'SPS-Programmierer (m/w/d)',
    company: 'DEKRA Arbeit GmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    tags: ['Informatiker/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '23',
    title: 'SPS Programmierer (m/w/d)',
    company: 'JobImpulse Süd GmbH Nürtingen',
    location: 'Winterbach bei Schorndorf, Württ.',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  },
  {
    id: '24',
    title: 'CAM-Programmierer (w/m/d)',
    company: 'Piening GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Industriemechaniker/in - Produktionstechnik'],
    postedAt: '2026-03-02'
  },
  {
    id: '25',
    title: 'SPS Programmierer:in',
    company: 'Baljer & Zembrod GmbH & Co. KG',
    location: 'Altshausen',
    type: 'Vollzeit',
    tags: ['SPS-Fachkraft'],
    postedAt: '2026-03-02'
  }
];

const FAQ_ITEMS = [
  {
    question: 'Welche Programmierer-Jobs werden auf programmierer-stellen.de angeboten?',
    answer: 'Wir listen eine breite Auswahl an Programmierer-Stellenangeboten: Softwareentwickler, SPS-Programmierer, Web-Developer, Full-Stack-Ingenieure, Backend- und Frontend-Entwickler, DevOps-Engineers, Mobile-Entwickler und viele mehr. Die Stellen decken alle gaengigen Programmiersprachen und Technologien ab.'
  },
  {
    question: 'Ist die Jobsuche fuer Bewerber kostenlos?',
    answer: 'Ja, die Nutzung von programmierer-stellen.de ist fuer Bewerber vollstaendig kostenlos. Sie koennen alle Stellenangebote durchsuchen, sich direkt bewerben und Job-Alerts einrichten, ohne dass Kosten entstehen.'
  },
  {
    question: 'Wie kann ich mich auf eine Stelle bewerben?',
    answer: 'Klicken Sie einfach auf das gewuenschte Stellenangebot und nutzen Sie den Bewerben-Button. Sie werden dann durch den Bewerbungsprozess gefuehrt und koennen Ihre Unterlagen direkt hochladen oder per E-Mail senden.'
  },
  {
    question: 'Werden auch Remote- und Teilzeit-Stellen angeboten?',
    answer: 'Ja, wir listen sowohl Vollzeit- als auch Teilzeit-Stellen sowie Remote- und Hybrid-Positionen. Nutzen Sie die Filteroptionen, um gezielt nach dem gewuenschten Arbeitsmodell zu suchen.'
  },
  {
    question: 'Wie aktuell sind die Stellenangebote?',
    answer: 'Unsere Stellenangebote werden taeglich aktualisiert. Wir arbeiten direkt mit Arbeitgebern und der Bundesagentur fuer Arbeit zusammen, um sicherzustellen, dass alle Anzeigen aktuell und relevant sind.'
  },
  {
    question: 'Wie kann ich als Arbeitgeber eine Stelle inserieren?',
    answer: 'Arbeitgeber koennen ueber unsere Kontaktseite oder direkt per E-Mail an info@socialmediaventure.com eine Stellenanzeige aufgeben. Wir bieten verschiedene Pakete fuer eine gezielte Reichweite bei qualifizierten Programmierern.'
  },
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

      {/* German Cities Geo SEO Section */}
      <GermanCitiesGeo />

      {/* Career Info Section */}
      <section className="py-20 bg-tech-900/30 border-t border-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-white mb-4 tracking-tighter">Karriere als Programmierer in Deutschland</h2>
            <p className="text-tech-400 max-w-2xl mx-auto text-lg">Wissenswertes rund um Gehalt, Einstieg und Karrierechancen fuer Programmierer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-tech-900 rounded-xl border border-tech-800 p-6 lg:p-8">
              <div className="p-3 bg-brand-primary/10 rounded-lg w-fit mb-4">
                <TrendingUp className="text-brand-primary w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Gehalt & Verguetung</h3>
              <p className="text-tech-400 text-sm leading-relaxed">
                Programmierer gehoeren zu den bestbezahlten Fachkraeften in Deutschland. Einstiegsgehaelter liegen je nach Region und Spezialisierung zwischen 45.000 und 60.000 Euro brutto jaehrlich. Erfahrene Senior-Entwickler und Architekten koennen 80.000 bis ueber 100.000 Euro erreichen. In Staedten wie Muenchen, Frankfurt und Stuttgart sind die Gehaelter tendenziell hoeher.
              </p>
            </div>
            <div className="bg-tech-900 rounded-xl border border-tech-800 p-6 lg:p-8">
              <div className="p-3 bg-brand-secondary/10 rounded-lg w-fit mb-4">
                <GraduationCap className="text-brand-secondary w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Einstieg & Ausbildung</h3>
              <p className="text-tech-400 text-sm leading-relaxed">
                Der Einstieg in die Programmierung ist ueber verschiedene Wege moeglich: Informatik-Studium, Fachinformatiker-Ausbildung, Coding-Bootcamps oder als Quereinsteiger mit Selbststudium. Besonders gefragt sind Kenntnisse in Python, JavaScript, Java, C# und SQL. Auch SPS-Programmierung bietet hervorragende Karrierechancen in der Industrie.
              </p>
            </div>
            <div className="bg-tech-900 rounded-xl border border-tech-800 p-6 lg:p-8">
              <div className="p-3 bg-brand-accent/10 rounded-lg w-fit mb-4">
                <Briefcase className="text-brand-primary w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Arbeitsmarkt & Chancen</h3>
              <p className="text-tech-400 text-sm leading-relaxed">
                Der Fachkraeftemangel in der IT-Branche sorgt fuer hervorragende Berufsaussichten. Laut Branchenverband Bitkom sind in Deutschland ueber 100.000 IT-Stellen unbesetzt. Programmierer profitieren von flexiblen Arbeitsmodellen wie Remote-Arbeit, ueberdurchschnittlichen Sozialleistungen und zahlreichen Weiterbildungsmoeglichkeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-tech-950 border-t border-tech-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-white mb-4 tracking-tighter">Haeufig gestellte Fragen</h2>
            <p className="text-tech-400 max-w-2xl mx-auto text-lg">Alles Wichtige rund um Programmierer-Stellenangebote auf einen Blick.</p>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-tech-900 rounded-xl border border-tech-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-tech-800/50 transition-colors"
                >
                  <span className="text-white font-semibold text-sm lg:text-base pr-4">{item.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-brand-primary flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-tech-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                    <p className="text-tech-400 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Schema Markup */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }) }} />
        </div>
      </section>

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
