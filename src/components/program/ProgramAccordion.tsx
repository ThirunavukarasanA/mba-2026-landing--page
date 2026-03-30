'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

function ProgramAccordionRow({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-booth-border last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 bg-booth-bg-gray/60 px-4 py-4 text-left transition-colors hover:bg-booth-border/30"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="font-trade-gothic-bold text-lg text-booth-dark-gray">{title}</span>
        <ChevronDown
          className={clsx(
            'h-5 w-5 shrink-0 text-booth-maroon transition-transform duration-200',
            open && 'rotate-180'
          )}
          aria-hidden
        />
      </button>
      <div
        className={clsx(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-booth-border bg-white px-4 pb-4 pt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** Single-open accordion; use for dense program content (steps, modules, recruiter groups). */
export function ProgramAccordionList({
  items,
  defaultOpenIndex = 0,
}: {
  items: { title: string; content: React.ReactNode }[];
  /** Index to start expanded, or `null` for all collapsed. */
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

  return (
    <div className="overflow-hidden rounded-lg border border-booth-border bg-white shadow-sm">
      {items.map((item, i) => (
        <ProgramAccordionRow
          key={i}
          title={item.title}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        >
          {item.content}
        </ProgramAccordionRow>
      ))}
    </div>
  );
}
