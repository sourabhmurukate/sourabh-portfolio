import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { projects } from '@/lib/projects'
import { ArrowUpRight, Lock } from 'lucide-react'
import Link from 'next/link'

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel index="03">Featured Projects</SectionLabel>
        </Reveal>
        <Reveal>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Enterprise platforms and consumer apps, end to end.
            </h2>
            <p className="text-sm text-muted-foreground">
              {projects.length} selected case studies
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_8px_40px_-12px] hover:shadow-brand/20 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.nda && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        <Lock className="h-3 w-3" />
                        NDA
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
