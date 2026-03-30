'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface WhatComesNextSectionProps {
  program: MBAProgramContent;
}

export function WhatComesNextSection({ program }: WhatComesNextSectionProps) {
  const next = program.whatComesNext;
  if (!next) return null;
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">What comes next</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {next.title}
        </h2>
        <div className="section-title-bar" />
        {next.subtitle ? (
          <h3 className="mb-4 font-trade-gothic-bold text-xl text-booth-dark-gray">{next.subtitle}</h3>
        ) : null}
        {next.listIntro === null ? null : (
          <p className="mb-3 font-trade-gothic-bold text-booth-dark-gray">
            {next.listIntro ?? 'After completing the program:'}
          </p>
        )}
        <ul className={listTwoCol}>
          {next.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 ref-body">
              <span className="shrink-0 text-booth-maroon">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
