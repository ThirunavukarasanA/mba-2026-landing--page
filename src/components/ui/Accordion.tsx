'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

export function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
            <button
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 text-left transition-colors"
                onClick={onClick}
            >
                <span className="font-medium text-gray-900">{title}</span>
                <ChevronDown
                    className={clsx(
                        "w-5 h-5 text-gray-500 transition-transform duration-200",
                        isOpen && "transform rotate-180"
                    )}
                />
            </button>
            <div
                className={clsx(
                    "bg-gray-50 text-gray-700 transition-all duration-300 overflow-hidden",
                    isOpen ? "max-h-[500px] opacity-100 p-4 border-t border-gray-200" : "max-h-0 opacity-0"
                )}
            >
                {children}
            </div>
        </div>
    );
}

interface AccordionProps {
    items: { id: string; title: string; content: string }[];
}

export function Accordion({ items }: AccordionProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="space-y-2">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    title={item.title}
                    isOpen={openId === item.id}
                    onClick={() => toggle(item.id)}
                >
                    <p className="leading-relaxed text-sm sm:text-base">{item.content}</p>
                </AccordionItem>
            ))}
        </div>
    );
}
