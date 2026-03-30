'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface FacultySectionProps {
  program: MBAProgramContent;
}

export function FacultySection({ program }: FacultySectionProps) {
  const faculty = program.faculty;
  if (!faculty) return null;

  return (
    <section className="bg-booth-bg-gray py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Faculty</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {faculty.title}
        </h2>
        <div className="section-title-bar" />
        {faculty.subtitle ? <p className="ref-body mb-4">{faculty.subtitle}</p> : null}
        <ul className={`${listTwoCol} mb-6`}>
          {faculty.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 ref-body">
              <span className="shrink-0 text-booth-maroon">•</span>
              {point}
            </li>
          ))}
        </ul>
        {faculty.note ? <p className="ref-body">{faculty.note}</p> : null}
      </div>
    </section>
  );
}
