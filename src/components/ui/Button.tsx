import React, { ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-primary-900 text-white hover:bg-primary-800 shadow-md': variant === 'primary',
                        'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm': variant === 'secondary',
                        'border-2 border-primary-900 text-primary-900 hover:bg-primary-50': variant === 'outline',
                        'hover:bg-gray-100 text-gray-700': variant === 'ghost',
                        'text-primary-900 underline-offset-4 hover:underline': variant === 'link',
                        'min-h-8 px-3 text-sm py-1': size === 'sm',
                        'min-h-12 px-6 text-base py-2': size === 'md',
                        'min-h-14 px-8 text-lg py-3': size === 'lg',
                        'whitespace-normal text-center leading-snug': true,
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
