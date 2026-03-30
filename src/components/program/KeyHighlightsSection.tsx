'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listResponsive = 'grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4';

interface KeyHighlightsSectionProps {
  program: MBAProgramContent;
}

export function KeyHighlightsSection({ program }: KeyHighlightsSectionProps) {
  const { keyHighlights } = program;
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Key Highlights</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          What makes this programme stand out
        </h2>
        <div className="section-title-bar" />
        <ul className={listResponsive}>
          {keyHighlights.map((item, i) => (
            <li key={i} className="flex items-start gap-2 ref-body">
              <span className="shrink-0 text-booth-maroon">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
