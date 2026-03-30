'use client';

import Image from 'next/image';
import type { MBAProgramContent } from '@/data/mbaPrograms';
import { ProgramAccordionList } from './ProgramAccordion';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface HowItWorksSectionProps {
  program: MBAProgramContent;
}

export function HowItWorksSection({ program }: HowItWorksSectionProps) {
  const { howItWorks } = program;
  const sideImage = howItWorks.sideImage;

  const accordion = (
    <ProgramAccordionList
      defaultOpenIndex={0}
      items={howItWorks.steps.map((step) => ({
        title: step.title,
        content: (
          <ul className={listTwoCol}>
            {step.points.map((point, j) => (
              <li key={j} className="flex items-start gap-2 ref-body">
                <span className="shrink-0 text-booth-maroon">•</span>
                {point}
              </li>
            ))}
          </ul>
        ),
      }))}
    />
  );

  return (
    <section className="bg-booth-bg-gray py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">How it works</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {howItWorks.sectionTitle}
        </h2>
        <div className="section-title-bar" />

        {sideImage ? (
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-7">{accordion}</div>
            <div className="lg:sticky lg:top-28 lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={sideImage}
                  alt={howItWorks.sideImageAlt ?? ''}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        ) : (
          accordion
        )}
      </div>
    </section>
  );
}
