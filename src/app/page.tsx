'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyActionBar } from '@/components/layout/StickyActionBar';
import { BrochureDrawer, QuestionDrawer, CallbackDrawer, ReserveSeatDrawer } from '@/components/drawers/AllDrawers';
import { programSlugs, mbaPrograms } from '@/data/mbaPrograms';

type DrawerType = 'brochure' | 'question' | 'callback' | 'reserve' | null;

export default function Home() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const closeDrawer = () => setActiveDrawer(null);

  return (
    <div className="min-h-screen bg-booth-bg-gray font-sans text-booth-dark-gray pb-24">
      <Header />
      <main className="ref-container max-w-2xl py-12 sm:py-16">
        <p className="section-label">Admissions</p>
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-trade-gothic-bold text-booth-dark-gray tracking-tight mb-2">
          RVS CAS MBA
        </h1>
        <div className="section-title-bar mb-6" />
        <p className="ref-body mb-8">
          Choose a program to view details and apply.
        </p>
        <nav className="flex flex-col gap-3">
          {programSlugs.map((slug) => {
            const program = mbaPrograms[slug];
            return (
              <Link
                key={slug}
                href={`/programs/${slug}`}
                className="block w-full py-4 px-5 rounded-lg border-2 border-booth-maroon bg-white text-booth-maroon font-trade-gothic-bold hover:bg-booth-maroon hover:text-white transition text-left"
              >
                {program.title}
              </Link>
            );
          })}
        </nav>
      </main>
      <Footer />

      <StickyActionBar
        onBrochure={() => setActiveDrawer('brochure')}
        onQuestion={() => setActiveDrawer('question')}
        onCallback={() => setActiveDrawer('callback')}
      />
      <BrochureDrawer isOpen={activeDrawer === 'brochure'} onClose={closeDrawer} selectedProgram={null} />
      <QuestionDrawer isOpen={activeDrawer === 'question'} onClose={closeDrawer} />
      <CallbackDrawer isOpen={activeDrawer === 'callback'} onClose={closeDrawer} />
      <ReserveSeatDrawer isOpen={activeDrawer === 'reserve'} onClose={closeDrawer} selectedProgram={null} />
    </div>
  );
}
