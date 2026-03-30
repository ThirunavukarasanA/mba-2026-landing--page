import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProgramPageClient } from '@/components/program/ProgramPageClient';
import { mbaPrograms, programSlugs, type ProgramSlug } from '@/data/mbaPrograms';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function isValidSlug(slug: string): slug is ProgramSlug {
  return programSlugs.includes(slug as ProgramSlug);
}

export async function generateStaticParams() {
  return programSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidSlug(slug)) return { title: 'MBA Programs' };
  const program = mbaPrograms[slug];
  return {
    title: `${program.title} — RVS CAS MBA`,
    description: program.hero.tagline,
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();
  const program = mbaPrograms[slug];
  return <ProgramPageClient program={program} />;
}
