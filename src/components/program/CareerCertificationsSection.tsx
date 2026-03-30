'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface CareerCertificationsSectionProps {
  program: MBAProgramContent;
}

export function CareerCertificationsSection({ program }: CareerCertificationsSectionProps) {
  const block = program.careerCertifications;
  if (!block) return null;

  return (
    <section className="bg-booth-bg-gray py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Additional certifications</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {block.title}
        </h2>
        <div className="section-title-bar" />
        <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">{block.subtitle}</h3>
        <ul className={`${listTwoCol} ref-body`}>
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="shrink-0 text-booth-maroon">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
