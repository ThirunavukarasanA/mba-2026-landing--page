'use client';

interface InBetweenCTASectionProps {
  journeyTitle: string;
  onBrochure: () => void;
  onApply: () => void;
}

export function InBetweenCTASection({ journeyTitle, onBrochure, onApply }: InBetweenCTASectionProps) {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="ref-container">
        <div className="rounded-xl bg-booth-maroon px-4 py-4 shadow-sm sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-left">
              <div className="mb-3 h-[3px] w-9 bg-white/90" />
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/80">Take the first step</p>
              <h3 className="font-trade-gothic-bold text-lg leading-tight text-white sm:text-xl">{journeyTitle}</h3>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-3">
            <button
              type="button"
              onClick={onBrochure}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-widest text-booth-maroon transition-colors hover:bg-booth-bg-gray"
            >
              <span>Download Brochure</span>
              <span aria-hidden>→</span>
            </button>
            <button
              type="button"
              onClick={onApply}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/80 px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-booth-maroon"
            >
              <span>Apply Now</span>
              <span aria-hidden>→</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
