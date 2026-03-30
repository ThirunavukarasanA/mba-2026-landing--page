'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';
import { ProgramAccordionList } from './ProgramAccordion';
import { ContentImagePlaceholder } from './ContentImagePlaceholder';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface CareerSectionProps {
  program: MBAProgramContent;
}

export function CareerSection({ program }: CareerSectionProps) {
  const { career } = program;
  const recruiterItems =
    career.recruiters && career.recruiters.length > 0
      ? career.recruiters.map((group) => ({
          title: group.category,
          content: (
            <ul className={listTwoCol}>
              {group.names.map((name, j) => (
                <li key={j} className="ref-body">
                  {name}
                </li>
              ))}
            </ul>
          ),
        }))
      : null;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Career outcomes</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {career.title}
        </h2>
        <div className="section-title-bar" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 space-y-8 lg:col-span-8">
            <div
              className={
                career.support && career.support.length > 0
                  ? 'grid grid-cols-1 gap-8 lg:grid-cols-2'
                  : 'grid grid-cols-1'
              }
            >
              <div>
                <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">
                  {career.rolesHeading ?? 'Roles'}
                </h3>
                <ul className={listTwoCol}>
                  {career.roles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2 ref-body">
                      <span className="shrink-0 text-booth-maroon">•</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              {career.support && career.support.length > 0 ? (
                <div>
                  <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">Career Support</h3>
                  <ul className={listTwoCol}>
                    {career.support.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 ref-body">
                        <span className="shrink-0 text-booth-maroon">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {recruiterItems ? (
              <div>
                <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">Top Recruiters</h3>
                <ProgramAccordionList defaultOpenIndex={null} items={recruiterItems} />
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ContentImagePlaceholder
              label="Careers & placements"
              aspect="photo"
              className="w-full"
              programSlug={program.slug}
              variant="career"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
