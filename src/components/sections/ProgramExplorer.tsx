'use client';

import React, { useState } from 'react';
import { content, Program, Stream } from '@/data/content';
import { CollegeSelect } from '@/components/ui/CollegeSelect';
import { ChevronDown, GraduationCap, Clock, IndianRupee, BookOpen, Briefcase, FileText, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

interface ProgramExplorerProps {
    onSelectProgram: (program: Program) => void;
}

export function ProgramExplorer({ onSelectProgram }: ProgramExplorerProps) {
    const [activeCollegeId, setActiveCollegeId] = useState<string>('arts_science');

    // State for expanded Stream Accordions
    // Default open the first stream if exists
    const [expandedStreamId, setExpandedStreamId] = useState<string | null>(null);

    // State for expanded Program Details within a stream
    const [expandedProgramId, setExpandedProgramId] = useState<string | null>(null);

    const streams = content.programs[activeCollegeId] || [];

    // Auto-expand first stream when college changes
    React.useEffect(() => {
        if (streams.length > 0) {
            setExpandedStreamId(streams[0].id);
        } else {
            setExpandedStreamId(null);
        }
        setExpandedProgramId(null);
        onSelectProgram(null as any);
    }, [activeCollegeId]);


    const handleProgramClick = (program: Program) => {
        if (expandedProgramId === program.id) {
            setExpandedProgramId(null);
            onSelectProgram(null as any);
        } else {
            setExpandedProgramId(program.id);
            onSelectProgram(program);
        }
    };

    const toggleStream = (streamId: string) => {
        if (expandedStreamId === streamId) {
            setExpandedStreamId(null);
        } else {
            setExpandedStreamId(streamId);
        }
    };

    return (
        <section id="programs" className="py-8 bg-white min-h-[600px]">
            <div className="container mx-auto max-w-4xl px-4">

                {/* 1. College Dropdown Selection */}
                <CollegeSelect
                    selectedCollegeId={activeCollegeId}
                    onSelectCollege={setActiveCollegeId}
                />

                {/* 2. Stream Accordions */}
                <div className="space-y-4">
                    {streams.length === 0 ? (
                        <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                            No streams available for this college.
                        </div>
                    ) : (
                        streams.map((stream) => (
                            <div key={stream.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">

                                {/* Stream Header (Accordion Trigger) */}
                                <button
                                    onClick={() => toggleStream(stream.id)}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 text-left">{stream.label.en}</h3>
                                    <ChevronDown
                                        className={clsx(
                                            "w-5 h-5 text-gray-500 transition-transform duration-300",
                                            expandedStreamId === stream.id && "rotate-180"
                                        )}
                                    />
                                </button>

                                {/* Stream Content (Program List) */}
                                <div
                                    className={clsx(
                                        "transition-all duration-300 ease-in-out",
                                        expandedStreamId === stream.id ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                                    )}
                                >
                                    <div className="p-2 sm:p-4 space-y-3 bg-white">
                                        {stream.programs.length === 0 ? (
                                            <div className="text-center py-4 text-sm text-gray-400">No programs listed.</div>
                                        ) : (
                                            stream.programs.map((program) => (
                                                <div
                                                    key={program.id}
                                                    className={clsx(
                                                        "border rounded-lg transition-all duration-200 overflow-hidden",
                                                        expandedProgramId === program.id
                                                            ? "border-[#900000] ring-1 ring-[#900000] bg-white shadow-md"
                                                            : "border-gray-100 hover:border-red-200 hover:bg-red-50/30"
                                                    )}
                                                >
                                                    {/* Program Row */}
                                                    <div
                                                        onClick={() => handleProgramClick(program)}
                                                        className="p-3 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                                                    >
                                                        <div className="flex-1">
                                                            <div className="flex items-start gap-2 mb-1">
                                                                <h4 className="text-base font-bold text-gray-800 leading-tight">{program.name.en}</h4>
                                                                <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-gray-100 text-gray-600 rounded">
                                                                    {program.degree}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-xs text-gray-500">
                                                                <span className="flex items-center gap-1"><Clock size={12} /> {program.duration.en}</span>
                                                                <span className="flex items-center gap-1"><GraduationCap size={12} /> {program.eligibility.en}</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center justify-between sm:justify-end sm:gap-4 mt-1 sm:mt-0">
                                                            <div className="text-right">
                                                                <span className="block text-[10px] text-gray-400 font-medium uppercase tracking-wide">Fee</span>
                                                                <span className="block text-sm font-bold text-[#7C0201]">₹{program.fee.toLocaleString('en-IN')}</span>
                                                            </div>
                                                            <div className={clsx(
                                                                "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                                                                expandedProgramId === program.id ? "bg-[#7C0201] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-red-100"
                                                            )}>
                                                                <ChevronDown className={clsx("w-4 h-4 transition-transform duration-300", expandedProgramId === program.id && "rotate-180")} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Program Expanded Details */}
                                                    {expandedProgramId === program.id && (
                                                        <div className="bg-red-50/50 border-t border-red-100 p-4 grid gap-4 sm:grid-cols-2 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                                                            <div>
                                                                <h5 className="flex items-center gap-2 font-semibold text-[#7C0201] mb-1">
                                                                    <BookOpen size={14} /> What You Will Study
                                                                </h5>
                                                                <p className="text-gray-600 leading-snug text-xs">{program.details.learn.en || 'Details coming soon.'}</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="flex items-center gap-2 font-semibold text-[#7C0201] mb-1">
                                                                    <Briefcase size={14} /> Career Opportunities
                                                                </h5>
                                                                <p className="text-gray-600 leading-snug text-xs">{program.details.career.en || 'Details coming soon.'}</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="flex items-center gap-2 font-semibold text-[#7C0201] mb-1">
                                                                    <IndianRupee size={14} /> Fee Structure
                                                                </h5>
                                                                <p className="text-gray-600 leading-snug text-xs">{program.details.feeStructure.en || 'Contact for details.'}</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="flex items-center gap-2 font-semibold text-[#7C0201] mb-1">
                                                                    <FileText size={14} /> Admission
                                                                </h5>
                                                                <p className="text-gray-600 leading-snug text-xs">{program.details.admission.en || 'Direct admission applicable.'}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
