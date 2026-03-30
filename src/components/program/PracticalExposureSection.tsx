'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

interface PracticalExposureSectionProps {
  program: MBAProgramContent;
}

export function PracticalExposureSection({ program }: PracticalExposureSectionProps) {
  const pe = program.practicalExposure;
  if (!pe) return null;

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-booth-bg-gray">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="w-12 sm:w-16 h-0.5 bg-booth-maroon mb-4 sm:mb-6" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-trade-gothic-bold text-booth-dark-gray mb-6">
          {pe.title}
        </h2>
        <div className="space-y-4 mb-6">
          {pe.para1 && <p className="text-booth-dark-gray font-trade-gothic-light text-base sm:text-lg whitespace-pre-wrap">{pe.para1}</p>}
          {pe.para2 && <p className="text-booth-dark-gray font-trade-gothic-light text-base sm:text-lg whitespace-pre-wrap">{pe.para2}</p>}
        </div>
        {pe.points && pe.points.length > 0 && (
          <ul className="space-y-6 mb-6">
            {pe.points.map((point, i) => (
              <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-lg p-3 bg-white border border-gray-100 shadow-sm">
                {/* <div className="flex items-center gap-3 flex-1">
                  <span className="text-booth-maroon">✔</span>
                  <span className="text-booth-dark-gray font-trade-gothic-light text-base sm:text-lg">{point.text}</span>
                </div> */}
                {point.logos && point.logos.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 w-full p-2">
                    {point.logos.map((logo, j) => (
                      <img key={j} src={logo} alt="" className="h-10 sm:h-16 max-w-[120px] sm:max-w-none w-auto object-contain shrink-0" />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        {pe.outro && <p className="text-booth-dark-gray font-trade-gothic-light text-base sm:text-lg mt-6 whitespace-pre-wrap">{pe.outro}</p>}
      </div>
    </section>
  );
}
