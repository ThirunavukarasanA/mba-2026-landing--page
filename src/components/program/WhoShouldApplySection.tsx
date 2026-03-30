'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2';

interface WhoShouldApplySectionProps {
  program: MBAProgramContent;
}

export function WhoShouldApplySection({ program }: WhoShouldApplySectionProps) {
  const { whoShouldApply } = program;
  return (
    <section className="bg-booth-bg-gray py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Who should apply</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {whoShouldApply.title}
        </h2>
        <div className="section-title-bar" />
        <ul className={listTwoCol}>
          {whoShouldApply.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-booth-maroon">✔</span>
              <span className="ref-body">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
