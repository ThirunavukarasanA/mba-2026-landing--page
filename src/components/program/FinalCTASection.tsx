'use client';

import Link from 'next/link';
import type { MBAProgramContent } from '@/data/mbaPrograms';

interface FinalCTASectionProps {
  program: MBAProgramContent;
  onBrochure?: () => void;
  onCallback?: () => void;
  onApply?: () => void;
}

export function FinalCTASection({ program, onBrochure, onCallback, onApply }: FinalCTASectionProps) {
  const { takeTheFirstStep } = program;
  return (
    <section className="py-20 lg:py-24 bg-booth-maroon">
      <div className="ref-container">
        <div className="w-12 h-[3px] bg-white mb-6" />
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold text-white tracking-tight mb-2">
          Take the first step
        </h2>
        <h3 className="text-xl sm:text-2xl font-trade-gothic-bold text-white/95 mb-8">
          {takeTheFirstStep.title}
        </h3>
        <div className="flex flex-wrap gap-4">
          {onBrochure ? (
            <button
              type="button"
              onClick={onBrochure}
              className="inline-flex items-center justify-between gap-2 bg-white text-booth-maroon text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-booth-bg-gray transition-colors tracking-widest uppercase"
            >
              <span>Download Brochure</span>
              <span>→</span>
            </button>
          ) : (
            <a
              href="#brochure"
              className="inline-flex items-center justify-between gap-2 bg-white text-booth-maroon text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-booth-bg-gray transition-colors tracking-widest uppercase"
            >
              <span>Download Brochure</span>
              <span>→</span>
            </a>
          )}
          {onCallback ?
            (<button
              onClick={onCallback}
              className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
            >
              <span>Book Counselling</span>
              <span>→</span>
            </button>) : (<a
              href="#callback"
              className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
            >
              <span>Book Counselling</span>
              <span>→</span>
            </a>)
          }
          {/* <Link
            href="#"
            className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
          >
            <span>Book Counselling</span>
            <span>→</span>
          </Link> */}
          {onApply ?
            (<button
              onClick={onApply}
              className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
            >
              <span>Apply Now</span>
              <span>→</span>
            </button>) : (<a
              href="#apply"
              className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
            >
              <span>Apply Now</span>
              <span>→</span>
            </a>)
          }
          {/* <Link
            href="#"
            className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
          >
            <span>Apply Now</span>
            <span>→</span>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
