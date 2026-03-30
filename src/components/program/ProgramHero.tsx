'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { MBAProgramContent } from '@/data/mbaPrograms';

function HeroPanel({ introText, bullets }: { introText: string; bullets: string[] }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 sm:p-6">
      {introText && (
        <p className="text-white text-base sm:text-lg leading-relaxed mb-4 font-trade-gothic-light">
          {introText}
        </p>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-white text-base sm:text-lg font-trade-gothic-light">
        {bullets.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-white shrink-0 mt-0.5">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProgramHeroProps {
  program: MBAProgramContent;
  onBrochure?: () => void;
  onApply?: () => void;
}

export function ProgramHero({ program, onBrochure, onApply }: ProgramHeroProps) {
  const { hero } = program;
  const introText = hero.introLines?.length ? hero.introLines.join(' ') : '';

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end">
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-booth-maroon z-20" />
      <div className="absolute inset-0 z-0">
        <Image src={hero.image} alt={program.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-black/50" />
      </div>
      <div className="relative z-10 w-full ref-container py-10 sm:py-14 lg:py-16 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-[1fr,minmax(320px,42%)] gap-8 lg:gap-12 items-end">
          {/* Left: headline + tagline + CTAs */}
          <div className="flex flex-col">
            <div className="w-8 h-[2px] bg-booth-maroon mb-4" />
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold text-white leading-[1.05] tracking-tight mb-3">
              {hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-white/95 font-trade-gothic-bold mb-6 max-w-xl leading-snug">
              {hero.tagline}
            </p>
            {/* Panel on mobile only: between tagline and buttons */}
            <div className="lg:hidden mb-6">
              <HeroPanel introText={introText} bullets={hero.bullets} />
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {onBrochure ? (
                <button
                  type="button"
                  onClick={onBrochure}
                  className="inline-flex items-center justify-between gap-2 bg-booth-maroon text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-booth-maroon-dark transition-colors tracking-widest uppercase"
                >
                  <span>Download Brochure</span>
                  <span>→</span>
                </button>
              ) : (
                <a
                  href="#brochure"
                  className="inline-flex items-center justify-between gap-2 bg-booth-maroon text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-booth-maroon-dark transition-colors tracking-widest uppercase"
                >
                  <span>Download Brochure</span>
                  <span>→</span>
                </a>
              )}
              {onApply ? (
                <button
                  type="button"
                  onClick={onApply}
                  className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
                >
                  <span>Apply Now</span>
                  <span>→</span>
                </button>
              ) : (
                <Link
                  href="#"
                  className="inline-flex items-center justify-between gap-2 border border-white/80 text-white text-[0.8125rem] font-bold px-6 py-3.5 hover:bg-white hover:text-booth-maroon transition-colors tracking-widest uppercase"
                >
                  <span>Apply Now</span>
                  <span>→</span>
                </Link>
              )}
            </div>
          </div>

          {/* Right (lg only): intro + bullets in a compact panel */}
          <div className="hidden lg:block">
            <HeroPanel introText={introText} bullets={hero.bullets} />
          </div>
        </div>
      </div>
    </section>
  );
}
