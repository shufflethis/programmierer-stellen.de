import React from 'react';
import { MapPin, Globe } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 312, slug: 'berlin' },
  { name: 'Muenchen', region: 'Bayern', jobs: 287, slug: 'muenchen' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 198, slug: 'hamburg' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 176, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 154, slug: 'stuttgart' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 132, slug: 'koeln' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 118, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 94, slug: 'leipzig' },
  { name: 'Dresden', region: 'Sachsen', jobs: 82, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 76, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 89, slug: 'nuernberg' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 67, slug: 'dortmund' },
  { name: 'Bremen', region: 'Bremen', jobs: 58, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 52, slug: 'essen' },
  { name: 'Karlsruhe', region: 'Baden-Wuerttemberg', jobs: 64, slug: 'karlsruhe' },
  { name: 'Bonn', region: 'Nordrhein-Westfalen', jobs: 48, slug: 'bonn' },
  { name: 'Mannheim', region: 'Baden-Wuerttemberg', jobs: 45, slug: 'mannheim' },
  { name: 'Augsburg', region: 'Bayern', jobs: 38, slug: 'augsburg' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 42, slug: 'freiburg' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 29, slug: 'rostock' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-20 bg-tech-950 border-t border-tech-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-brand-primary mb-3 font-mono font-bold uppercase tracking-widest text-xs">
            <Globe size={16} />
            Programmierer-Jobs nach Stadt
          </div>
          <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-white mb-4 tracking-tighter">
            Programmierer-Stellenangebote in deutschen Staedten
          </h2>
          <p className="text-tech-400 max-w-2xl mx-auto text-lg">
            Finden Sie Programmierer-Jobs und Softwareentwickler-Stellen in Ihrer Naehe. Wir listen Stellenangebote in allen grossen IT-Standorten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <a
              key={city.slug}
              href={`#jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-tech-900 rounded-xl border border-tech-800 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/5 transition-all group"
            >
              <MapPin className="h-4 w-4 text-brand-primary flex-shrink-0 group-hover:text-brand-secondary" />
              <div className="min-w-0">
                <span className="font-semibold text-white text-sm block truncate">{city.name}</span>
                <span className="text-xs text-tech-500 font-mono">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 bg-tech-900/50 rounded-xl border border-tech-800 p-6 lg:p-8">
          <h3 className="font-bold text-white text-lg mb-4">Programmierer-Stellenangebote in ganz Deutschland</h3>
          <div className="text-tech-400 text-sm leading-relaxed space-y-3">
            <p>
              Deutschland gehoert zu den fuehrenden IT-Standorten Europas. Ob Softwareentwickler, SPS-Programmierer, Web-Developer oder Full-Stack-Engineer - in jeder grossen Stadt gibt es zahlreiche Karrieremoeglichkeiten fuer Programmierer und Entwickler aller Fachrichtungen.
            </p>
            <p>
              Die groessten Tech-Hubs wie Berlin, Muenchen, Hamburg und Frankfurt bieten besonders viele Stellen bei Startups, mittelstaendischen Unternehmen und internationalen Konzernen. Aber auch aufstrebende Standorte wie Leipzig, Dresden, Karlsruhe und Nuernberg verzeichnen eine steigende Nachfrage nach qualifizierten Programmierern.
            </p>
            <p>
              Ob Sie nach einer Festanstellung, Freelance-Projekten oder Remote-Arbeit suchen - auf programmierer-stellen.de finden Sie aktuelle Programmierer-Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um passende Entwickler-Jobs in Ihrer Naehe zu entdecken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
