'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface LimitedIntakeSectionProps {
  program: MBAProgramContent;
}

export function LimitedIntakeSection({ program }: LimitedIntakeSectionProps) {
  const { limitedIntake } = program;
  return (
    <section className="bg-booth-bg-gray py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Limited intake</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {limitedIntake.title}
        </h2>
        <div className="section-title-bar" />
        {limitedIntake.subline ? <p className="ref-body mb-6">{limitedIntake.subline}</p> : null}
        {limitedIntake.stepsLabel === null ? null : (
          <p className="mb-3 font-trade-gothic-bold text-sm uppercase tracking-wider text-booth-maroon">
            {limitedIntake.stepsLabel ?? 'Selection process:'}
          </p>
        )}
        <ul className={listTwoCol}>
          {limitedIntake.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2 ref-body">
              <span className="shrink-0 text-booth-maroon">•</span>
              {step}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
