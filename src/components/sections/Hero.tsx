'use client';

import React from 'react';
import { content } from '@/data/content';

interface HeroProps {
    onViewPrograms: () => void;
}

export function Hero({ onViewPrograms }: HeroProps) {
    const t = content.hero;

    return (
        <section className="py-12 px-4 text-center sm:text-left sm:py-20 bg-gradient-to-br from-white to-red-50">
            <div className="container mx-auto max-w-4xl">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#900000] uppercase bg-red-100 rounded-full">
                    UG Admissions 2026
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    {t.heading.en}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
                    {t.subtext.en}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <button
                        onClick={onViewPrograms}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#7C0201] hover:bg-[#5C0000] text-white font-semibold rounded-lg shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-2"
                    >
                        {t.primaryCta.en}
                    </button>
                </div>
            </div>
        </section>
    );
}
