'use client';

import React from 'react';
import { content } from '@/data/content';
import { Download, HelpCircle, Phone } from 'lucide-react';

interface StickyActionBarProps {
    onBrochure: () => void;
    onQuestion: () => void;
    onCallback: () => void;
}

export function StickyActionBar({ onBrochure, onQuestion, onCallback }: StickyActionBarProps) {
    const t = content.stickyBar;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center justify-between p-2 sm:p-4 gap-2">
                    <button onClick={onBrochure} className="flex-1 flex flex-col items-center justify-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Download size={20} className="mb-1" />
                        <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">{t.brochure.en}</span>
                    </button>
                    <button onClick={onQuestion} className="flex-1 flex flex-col items-center justify-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <HelpCircle size={20} className="mb-1" />
                        <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">{t.question.en}</span>
                    </button>
                    <button onClick={onCallback} className="flex-1 flex flex-col items-center justify-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Phone size={20} className="mb-1" />
                        <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">{t.callback.en}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
