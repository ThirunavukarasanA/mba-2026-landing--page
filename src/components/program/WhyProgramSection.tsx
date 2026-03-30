'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface WhyProgramSectionProps {
  program: MBAProgramContent;
}

export function WhyProgramSection({ program }: WhyProgramSectionProps) {
  const { whyProgram } = program;
  return (
    <section className="bg-booth-bg-gray py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Why this program</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {whyProgram.title}
        </h2>
        <div className="section-title-bar" />

        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">{whyProgram.typicalTitle}</h3>
            <ul className={listTwoCol}>
              {whyProgram.typicalPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 ref-body">
                  <span className="shrink-0 text-booth-maroon">✕</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">{whyProgram.rvsTitle}</h3>
            <ul className={listTwoCol}>
              {whyProgram.rvsPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 ref-body">
                  <span className="shrink-0 text-booth-maroon">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
