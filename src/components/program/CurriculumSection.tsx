'use client';

import type { MBAProgramContent } from '@/data/mbaPrograms';
import { ProgramAccordionList } from './ProgramAccordion';
import { ContentImagePlaceholder } from './ContentImagePlaceholder';

const listTwoCol = 'grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2';

interface CurriculumSectionProps {
  program: MBAProgramContent;
}

export function CurriculumSection({ program }: CurriculumSectionProps) {
  const { curriculum } = program;
  const { core, coreDetailed, specialization, tools, capstone } = curriculum;

  const capstoneProjects = capstone?.projects;
  const capstoneProjectsAccordion =
    capstoneProjects && capstoneProjects.length > 1 ? (
      <ProgramAccordionList
        defaultOpenIndex={0}
        items={capstoneProjects.map((project) => ({
          title: project.title,
          content: (
            <>
              {project.description ? <p className="ref-body mb-2">{project.description}</p> : null}
              {project.points && project.points.length > 0 ? (
                <ul className={listTwoCol}>
                  {project.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 ref-body text-sm">
                      <span className="shrink-0 text-booth-maroon">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          ),
        }))}
      />
    ) : null;

  const capstoneProjectsFlat =
    capstoneProjects && capstoneProjects.length === 1 ? (
      <div className="space-y-6">
        {capstone.projectsIntro ? <p className="ref-body">{capstone.projectsIntro}</p> : null}
        {capstoneProjects.map((project, i) => (
          <div key={i} className={i > 0 ? 'border-t border-booth-border pt-5' : ''}>
            <h4 className="mb-2 font-trade-gothic-bold text-booth-dark-gray">{project.title}</h4>
            {project.description ? <p className="ref-body mb-2">{project.description}</p> : null}
            {project.points && project.points.length > 0 ? (
              <ul className={listTwoCol}>
                {project.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 ref-body text-sm">
                    <span className="shrink-0 text-booth-maroon">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    ) : null;

  const capstoneBlock = capstone ? (
    <div className="border-l-4 border-booth-maroon bg-booth-bg-gray p-6">
      {capstone.sectionHeading ? (
        <h3 className="mb-4 font-trade-gothic-bold text-booth-dark-gray">{capstone.sectionHeading}</h3>
      ) : (
        <>
          <h3 className="mb-2 font-trade-gothic-bold text-booth-dark-gray">{capstone.title}</h3>
          <p className="ref-body mb-2">{capstone.description}</p>
        </>
      )}
      {capstoneProjects && capstoneProjects.length > 1 ? (
        <div className={`space-y-4 ${capstone.sectionHeading ? '' : 'mt-4'}`}>
          {capstone.projectsIntro ? <p className="ref-body">{capstone.projectsIntro}</p> : null}
          {capstoneProjectsAccordion}
        </div>
      ) : null}
      {capstoneProjects && capstoneProjects.length === 1 ? (
        <div className="mt-4">{capstoneProjectsFlat}</div>
      ) : null}
      {capstone.sectionHeading ? (
        <div className="mt-5 border-t border-booth-border pt-5">
          <h4 className="mb-2 font-trade-gothic-bold text-booth-dark-gray">{capstone.title}</h4>
          <p className="ref-body mb-0">{capstone.description}</p>
        </div>
      ) : null}
      {capstone.afterProjectsNote ? (
        <p className="ref-body mt-5 border-t border-booth-border pt-5">{capstone.afterProjectsNote}</p>
      ) : null}
      {capstone.points && (
        <ul className={`${listTwoCol} mt-2`}>
          {capstone.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 ref-body text-sm">
              <span className="shrink-0 text-booth-maroon">•</span>
              {point}
            </li>
          ))}
        </ul>
      )}
      {capstone.outcomesTitle ? (
        <h4 className="mb-2 mt-5 font-trade-gothic-bold text-booth-dark-gray">{capstone.outcomesTitle}</h4>
      ) : null}
      {capstone.outcomes && capstone.outcomes.length > 0 ? (
        <ul className={listTwoCol}>
          {capstone.outcomes.map((point, i) => (
            <li key={i} className="flex items-start gap-2 ref-body text-sm">
              <span className="shrink-0 text-booth-maroon">•</span>
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  ) : null;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="ref-container">
        <p className="section-label">Curriculum</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-trade-gothic-bold tracking-tight text-booth-dark-gray">
          {curriculum.title}
        </h2>
        <div className="section-title-bar" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_minmax(260px,32%)] lg:gap-12">
          <div className="min-w-0 space-y-8">
            <div>
              <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">{core.title}</h3>
              {coreDetailed && coreDetailed.length > 0 ? (
                <ProgramAccordionList
                  defaultOpenIndex={0}
                  items={coreDetailed.map((module) => ({
                    title: module.title,
                    content: (
                      <ul className={listTwoCol}>
                        {module.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 ref-body">
                            <span className="shrink-0 text-booth-maroon">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    ),
                  }))}
                />
              ) : (
                <ul className={listTwoCol}>
                  {core.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 ref-body">
                      <span className="shrink-0 text-booth-maroon">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {specialization && (
              <div>
                <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">{specialization.title}</h3>
                <ul className={listTwoCol}>
                  {specialization.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 ref-body">
                      <span className="shrink-0 text-booth-maroon">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tools && (
              <div>
                <h3 className="mb-3 font-trade-gothic-bold text-lg text-booth-dark-gray">{tools.title}</h3>
                {tools.intro ? <p className="ref-body mb-3">{tools.intro}</p> : null}
                <ul className={listTwoCol}>
                  {tools.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 ref-body">
                      <span className="shrink-0 text-booth-maroon">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {capstoneBlock}
          </div>

          <ContentImagePlaceholder
            label="Learning & labs"
            className="w-full lg:sticky lg:top-28"
            aspect="photo"
            programSlug={program.slug}
            variant="curriculum"
          />
        </div>
      </div>
    </section>
  );
}
