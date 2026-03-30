'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-booth-bg-gray">
      <div className="bg-booth-border/50 py-6">
        <div className="ref-container">
          <p className="text-sm ref-body">
            RVS CAS MBA is recognized by AICTE and affiliated with Bharathiar University. All programs are designed to meet industry standards and prepare students for successful careers in management.
          </p>
        </div>
      </div>
      <div className="ref-container py-8 md:py-12">
        <div className="w-12 h-[3px] bg-booth-maroon mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <div className="font-trade-gothic-bold text-booth-maroon text-lg mb-2">RVS CAS MBA</div>
            <p className="text-booth-dark-gray font-trade-gothic-light text-sm">RVS College of Arts & Science</p>
          </div>
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-3">Explore</h3>
            <ul className="space-y-2">
              {['Programs', 'Admissions', 'Events'].map((label) => (
                <li key={label}>
                  <Link href={label === 'Programs' ? '/#programs' : '#'} className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-3">Resources</h3>
            <ul className="space-y-2">
              {['Request Information', 'Apply', 'Contact'].map((label) => (
                <li key={label}>
                  <Link href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-booth-dark-gray font-trade-gothic-light text-sm mb-2">Sulur Campus, Coimbatore</p>
            <p className="text-booth-dark-gray font-trade-gothic-light text-sm">Tamil Nadu, India</p>
          </div>
        </div>
        <div className="border-t border-booth-border pt-6 flex flex-wrap gap-4 items-center text-sm ref-body">
          <Link href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">
            Privacy Policy
          </Link>
          <Link href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">
            Terms & Conditions
          </Link>
          <span className="text-booth-dark-gray font-trade-gothic-light">© RVS CAS MBA</span>
        </div>
      </div>
    </footer>
  );
}
