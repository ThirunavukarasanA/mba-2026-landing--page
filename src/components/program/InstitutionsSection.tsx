'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

interface InstitutionsSectionProps {
  program: MBAProgramContent;
}

export function InstitutionsSection({ program }: InstitutionsSectionProps) {
  const { institutions } = program;
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="ref-container">
        <p className="section-label">Institutions & Academic Framework</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold text-booth-dark-gray tracking-tight">
          Where you study & how it&apos;s recognised
        </h2>
        <div className="section-title-bar" />
        <p className="font-trade-gothic-bold text-booth-dark-gray text-lg mb-1">{institutions.name}</p>
        <p className="ref-body mb-1">{institutions.affiliation}</p>
        <p className="ref-body mb-6">{institutions.approval}</p>
        <p className="font-trade-gothic-bold text-booth-maroon text-sm mb-3 uppercase tracking-wider">Program designed with focus on:</p>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {institutions.focusPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 ref-body">
              <span className="shrink-0 text-booth-maroon">•</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
