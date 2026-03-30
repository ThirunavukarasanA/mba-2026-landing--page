'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

interface WhyChooseUsSectionProps {
  program: MBAProgramContent;
}

export function WhyChooseUsSection({ program }: WhyChooseUsSectionProps) {
  const data = program.whyChooseUs;
  if (!data) return null;

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="w-12 sm:w-16 h-0.5 bg-booth-maroon mb-4 sm:mb-6" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-trade-gothic-bold text-booth-dark-gray mb-6">
          {data.title}
        </h2>
        <div className="space-y-4">
          {data.para1 && <p className="text-booth-dark-gray font-trade-gothic-light text-base sm:text-lg whitespace-pre-wrap">{data.para1}</p>}
          {data.para2 && <p className="text-booth-dark-gray font-trade-gothic-light text-base sm:text-lg whitespace-pre-wrap">{data.para2}</p>}
        </div>
      </div>
    </section>
  );
}
