'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';
import { ProgramAccordionList } from './ProgramAccordion';
import { ContentImagePlaceholder } from './ContentImagePlaceholder';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface ProgramOverviewSectionProps {
  program: MBAProgramContent;
}

function SectionBody({
  paragraphs,
  points,
}: {
  paragraphs?: string[];
  points?: string[];
}) {
  return (
    <>
      {paragraphs?.map((paragraph, j) => (
        <p key={j} className="ref-body mb-3 last:mb-0">
          {paragraph}
        </p>
      ))}
      {points && points.length > 0 ? (
        <ul className={`${listTwoCol} mt-3`}>
          {points.map((point, j) => (
            <li key={j} className="flex items-start gap-2 ref-body">
              <span className="shrink-0 text-booth-maroon">•</span>
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export function ProgramOverviewSection({ program }: ProgramOverviewSectionProps) {
  const overview = program.programOverview;
  if (!overview) return null;

  const useAccordion = overview.sections.length >= 2;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">About the program</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {overview.title}
        </h2>
        <div className="section-title-bar" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            {overview.intro ? <p className="ref-body mb-8">{overview.intro}</p> : null}

            {useAccordion ? (
              <ProgramAccordionList
                defaultOpenIndex={0}
                items={overview.sections.map((section) => ({
                  title: section.title,
                  content: <SectionBody paragraphs={section.paragraphs} points={section.points} />,
                }))}
              />
            ) : (
              <div className="space-y-10">
                {overview.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="mb-3 font-trade-gothic-bold text-xl text-booth-dark-gray">{section.title}</h3>
                    <SectionBody paragraphs={section.paragraphs} points={section.points} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ContentImagePlaceholder
              label="Program overview"
              aspect="photo"
              className="w-full"
              programSlug={program.slug}
              variant="overview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
