'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import type { ProgramSlug } from '@/data/mbaPrograms';

type ImageVariant = 'overview' | 'curriculum' | 'career';

interface ContentImagePlaceholderProps {
  label?: string;
  aspect?: 'video' | 'photo';
  programSlug: ProgramSlug;
  variant: ImageVariant;
  className?: string;
}

const UNSPLASH_BY_VARIANT: Record<ImageVariant, Record<ProgramSlug, string>> = {
  overview: {
    'artificial-intelligence':
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    'digital-marketing':
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    'global-finance-corporate-analyst':
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    'human-resources':
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    'logistics-supply-chain-management':
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  curriculum: {
    'artificial-intelligence':
      '/learn-ai.jpg',
    'digital-marketing':
      '/learn-dm.jpg',
    'global-finance-corporate-analyst':
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    'human-resources':
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    'logistics-supply-chain-management':
      '/study-scm.jpg',
  },
  career: {
    'artificial-intelligence':
      '/career-ai.jpg',
    'digital-marketing':
      '/career-ai.jpg',
    'global-finance-corporate-analyst':
      '/career-ai.jpg',
    'human-resources':
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    'logistics-supply-chain-management':
      '/career-ai.jpg',
  },
};

export function ContentImagePlaceholder({
  label = 'Image',
  aspect = 'video',
  programSlug,
  variant,
  className,
}: ContentImagePlaceholderProps) {
  const imageSrc = UNSPLASH_BY_VARIANT[variant][programSlug];

  return (
    <figure
      className={clsx(
        'relative overflow-hidden rounded-lg border border-booth-border bg-booth-bg-gray/90',
        aspect === 'video' ? 'aspect-video' : 'aspect-[4/3]',
        className
      )}
    >
      <Image src={imageSrc} alt={label} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
        <span className="text-xs font-bold uppercase tracking-wider text-white">{label}</span>
      </figcaption>
    </figure>
  );
}
