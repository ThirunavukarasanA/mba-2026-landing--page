'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

interface FooterCTASectionProps {
  program: MBAProgramContent;
  onCallback?: () => void;
}

export function FooterCTASection({ program, onCallback }: FooterCTASectionProps) {
  const { footerCta } = program;
  return (
    <section className="py-16 lg:py-20 bg-booth-bg-gray border-t border-booth-border">
      <div className="ref-container">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-trade-gothic-bold text-booth-dark-gray mb-4">
          {footerCta.title}
        </h2>
        <p className="font-trade-gothic-bold text-booth-dark-gray mb-3">Get guidance on:</p>
        <ul className="space-y-2 mb-8">
          {footerCta.guidancePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 ref-body">
              <span className="text-booth-maroon shrink-0">•</span> {point}
            </li>
          ))}
        </ul>
        {onCallback ? (
          <button
            type="button"
            onClick={onCallback}
            className="inline-flex items-center justify-between gap-2 bg-booth-maroon text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-booth-maroon-dark transition-colors tracking-widest uppercase"
          >
            <span>{footerCta.ctaText}</span>
            <span>→</span>
          </button>
        ) : (
          <a
            href="#"
            className="inline-flex items-center justify-between gap-2 bg-booth-maroon text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-booth-maroon-dark transition-colors tracking-widest uppercase"
          >
            <span>{footerCta.ctaText}</span>
            <span>→</span>
          </a>
        )}
      </div>
    </section>
  );
}
