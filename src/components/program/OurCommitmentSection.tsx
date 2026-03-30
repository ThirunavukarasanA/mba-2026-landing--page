'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

interface OurCommitmentSectionProps {
  program: MBAProgramContent;
}

export function OurCommitmentSection({ program }: OurCommitmentSectionProps) {
  const commit = program.ourCommitment;
  if (!commit) return null;
  return (
    <section className="py-20 lg:py-24 bg-booth-bg-gray">
      <div className="ref-container">
        <p className="section-label">Our commitment</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold text-booth-dark-gray tracking-tight">
          {commit.title}
        </h2>
        <div className="section-title-bar" />
        <p className="ref-body mb-6">{commit.subtitle}</p>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {commit.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 ref-body">
              <span className="shrink-0 text-booth-maroon">•</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
