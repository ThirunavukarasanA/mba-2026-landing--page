'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';

interface RiskManagementSectionProps {
  program: MBAProgramContent;
}

export function RiskManagementSection({ program }: RiskManagementSectionProps) {
  const risk = program.riskManagement;
  if (!risk) return null;
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="ref-container">
        <p className="section-label">Risk management</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold text-booth-dark-gray tracking-tight">
          {risk.title}
        </h2>
        <div className="section-title-bar" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-3 font-trade-gothic-bold text-booth-dark-gray">
              Choosing without understanding can lead to:
            </p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {risk.typicalPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 ref-body">
                  <span className="shrink-0 text-booth-maroon">•</span> {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-trade-gothic-bold text-booth-dark-gray">This program helps you:</p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {risk.programHelps.map((point, i) => (
                <li key={i} className="flex items-start gap-2 ref-body">
                  <span className="shrink-0 text-booth-maroon">✓</span> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
