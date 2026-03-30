'use client';

import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-booth-border">
      <div className="h-[4px] w-full bg-booth-maroon" />
      <div className="ref-container flex items-center justify-between min-h-[72px] py-3">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logo.svg"
            alt="RVS CAS"
            className="h-12 w-auto sm:h-14 md:h-16 object-contain object-left"
          />
        </Link>
      </div>
    </header>
  );
}
