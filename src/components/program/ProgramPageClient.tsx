'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyActionBar } from '@/components/layout/StickyActionBar';
import { BrochureDrawer, QuestionDrawer, CallbackDrawer, ReserveSeatDrawer } from '@/components/drawers/AllDrawers';
import { ProgramHero } from './ProgramHero';
import { KeyHighlightsSection } from './KeyHighlightsSection';
import { ProgramOverviewSection } from './ProgramOverviewSection';
import { HowItWorksSection } from './HowItWorksSection';
import { InstitutionsSection } from './InstitutionsSection';
import { WhyProgramSection } from './WhyProgramSection';
import { AcademicExperienceSection } from './AcademicExperienceSection';
import { CurriculumSection } from './CurriculumSection';
import { FacultySection } from './FacultySection';
import { CareerSection } from './CareerSection';
import { WhoShouldApplySection } from './WhoShouldApplySection';
import { WhatComesNextSection } from './WhatComesNextSection';
import { OurCommitmentSection } from './OurCommitmentSection';
import { RiskManagementSection } from './RiskManagementSection';
import { CareerCertificationsSection } from './CareerCertificationsSection';
import { LimitedIntakeSection } from './LimitedIntakeSection';
import { InBetweenCTASection } from './InBetweenCTASection';
import { FinalCTASection } from './FinalCTASection';
import { FooterCTASection } from './FooterCTASection';
import type { MBAProgramContent } from '@/data/mbaPrograms';
// import { CurriculumStructureSection } from './CurriculumStructureSection';
// import { PracticalExposureSection } from './PracticalExposureSection';
// import { WhyChooseUsSection } from './WhyChooseUsSection';

type DrawerType = 'brochure' | 'question' | 'callback' | 'reserve' | null;

interface ProgramPageClientProps {
  program: MBAProgramContent;
}

export function ProgramPageClient({ program }: ProgramPageClientProps) {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const closeDrawer = () => setActiveDrawer(null);

  const openBrochure = () => setActiveDrawer('brochure');
  const openCallback = () => setActiveDrawer('callback');
  const openApply = () => setActiveDrawer('reserve');

  return (
    <div className="min-h-screen bg-booth-bg-gray pb-24 font-sans text-booth-dark-gray">
      <Header />
      <main>
        <ProgramHero program={program}
          onBrochure={openBrochure}
          onApply={openApply}
        />
        <KeyHighlightsSection program={program} />
        <ProgramOverviewSection program={program} />
        <HowItWorksSection program={program} />
        <InBetweenCTASection
          journeyTitle={program.takeTheFirstStep.title}
          onBrochure={openBrochure}
          onApply={openApply}
        />
        <InstitutionsSection program={program} />
        <WhyProgramSection program={program} />
        <AcademicExperienceSection program={program} />
        <CurriculumSection program={program} />
        <InBetweenCTASection
          journeyTitle={program.takeTheFirstStep.title}
          onBrochure={openBrochure}
          onApply={openApply}
        />
        <CareerCertificationsSection program={program} />
        <FacultySection program={program} />
        <CareerSection program={program} />
        <InBetweenCTASection
          journeyTitle={program.takeTheFirstStep.title}
          onBrochure={openBrochure}
          onApply={openApply}
        />
        <WhoShouldApplySection program={program} />
        <WhatComesNextSection program={program} />
        <OurCommitmentSection program={program} />
        <RiskManagementSection program={program} />
        <LimitedIntakeSection program={program} />
        <FinalCTASection program={program}
          onBrochure={openBrochure}
          onCallback={openCallback}
          onApply={openApply}
        />
        <FooterCTASection program={program} onCallback={openCallback} />
      </main>
      <StickyActionBar
        onBrochure={() => setActiveDrawer('brochure')}
        onQuestion={() => setActiveDrawer('question')}
        onCallback={() => setActiveDrawer('callback')}
      />
      <BrochureDrawer isOpen={activeDrawer === 'brochure'} onClose={closeDrawer} selectedProgram={program as any} />
      <QuestionDrawer isOpen={activeDrawer === 'question'} onClose={closeDrawer} selectedProgram={program as any} />
      <CallbackDrawer isOpen={activeDrawer === 'callback'} onClose={closeDrawer} selectedProgram={program as any} />
      <ReserveSeatDrawer isOpen={activeDrawer === 'reserve'} onClose={closeDrawer} selectedProgram={program as any} />
      <Footer />
    </div>
  );
}
