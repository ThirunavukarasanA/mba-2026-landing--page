'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function Drawer({ isOpen, onClose, title, children, className }: DrawerProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center pointer-events-none">
            {/* Backdrop */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black/50 transition-opacity duration-300 pointer-events-auto",
                    isOpen ? "opacity-100" : "opacity-0"
                )}
                onClick={onClose}
            />

            {/* Drawer Content */}
            <div
                className={twMerge(
                    clsx(
                        "relative w-full max-w-lg bg-white shadow-xl transition-transform duration-300 pointer-events-auto",
                        "rounded-t-2xl sm:rounded-xl",
                        isOpen ? "translate-y-0" : "translate-y-full"
                    ),
                    className
                )}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-4 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
