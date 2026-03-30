'use client';

import React from 'react';
import { content } from '@/data/content';
import { ChevronDown, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface CollegeSelectProps {
    selectedCollegeId: string;
    onSelectCollege: (id: string) => void;
}

export function CollegeSelect({ selectedCollegeId, onSelectCollege }: CollegeSelectProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const selectedCollege = content.colleges.find(c => c.id === selectedCollegeId);

    return (
        <div className="relative mb-8 z-20">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Select Institution
            </label>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-[#7C0201] text-white rounded-xl shadow-lg ring-1 ring-black/5 hover:bg-[#5C0000] transition-all"
            >
                <span className="font-bold text-lg line-clamp-1">
                    {selectedCollege?.label.en}
                </span>
                <ChevronDown className={clsx("w-5 h-5 text-white/80 transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden max-h-[60vh] overflow-y-auto z-30">
                    {content.colleges.map((college) => (
                        <button
                            key={college.id}
                            onClick={() => {
                                onSelectCollege(college.id);
                                setIsOpen(false);
                            }}
                            className={clsx(
                                "w-full flex items-center justify-between p-4 text-left hover:bg-red-50 transition-colors border-b last:border-b-0 group",
                                selectedCollegeId === college.id ? "bg-red-50" : "bg-white"
                            )}
                        >
                            <span className={clsx("font-medium transition-colors", selectedCollegeId === college.id ? "text-[#7C0201] font-bold" : "text-gray-700 group-hover:text-[#7C0201]")}>
                                {college.label.en}
                            </span>
                            {selectedCollegeId === college.id && <Check className="w-5 h-5 text-[#7C0201]" />}
                        </button>
                    ))}
                </div>
            )}

            {/* Backdrop to close */}
            {isOpen && (
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
            )}
        </div>
    );
}
