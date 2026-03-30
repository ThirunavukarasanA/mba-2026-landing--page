'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

interface AdmissionsSectionProps {
  program: MBAProgramContent;
}

export function AdmissionsSection({ program }: AdmissionsSectionProps) {
  const { admissions, trust } = program;
  if (!admissions && (!trust || trust.length === 0)) return null;

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="w-12 sm:w-16 h-0.5 bg-booth-maroon mb-4 sm:mb-6" />
        {admissions && (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-trade-gothic-bold text-booth-dark-gray mb-6">
              {admissions.title}
            </h2>
            <ul className="space-y-2 mb-8">
              {admissions.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-booth-dark-gray font-trade-gothic-light">
                  <span className="text-booth-maroon">•</span> {req}
                </li>
              ))}
            </ul>
          </>
        )}
        {trust && trust.length > 0 && (
          <div className={`pt-6 ${admissions ? 'border-t border-gray-200' : ''}`}>
            <p className="text-booth-light-gray font-trade-gothic-light text-sm">
              {trust.join(' • ')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
