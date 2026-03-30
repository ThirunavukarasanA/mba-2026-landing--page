'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2';

interface AcademicExperienceSectionProps {
  program: MBAProgramContent;
}

export function AcademicExperienceSection({ program }: AcademicExperienceSectionProps) {
  const exp = program.academicExperience;
  if (!exp || !exp.points?.length) return null;
  return (
    <section className="bg-booth-bg-gray py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Academic experience</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {exp.title}
        </h2>
        <div className="section-title-bar" />
        <ul className={listTwoCol}>
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 ref-body">
              <span className="mt-1 shrink-0 text-booth-maroon">•</span>
              {point}
            </li>
          ))}
        </ul>
        {/* {exp.outro && <p className="text-booth-dark-gray font-trade-gothic-light mb-4 whitespace-pre-wrap">{exp.outro}</p>} */}
        {/* {exp.tagline && <p className="text-booth-maroon font-trade-gothic-bold text-lg whitespace-pre-wrap">{exp.tagline}</p>} */}
      </div>
    </section>
  );
}
