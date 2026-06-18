import { DetailNav } from '@/components/detail-nav'
import { Footer } from '@/components/sections/footer'
import { Reveal } from '@/components/reveal'
import { getProject, projects } from '@/lib/projects'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Lock,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Case Study' }
  return {
    title: `${project.title} — Case Study · Sourabh Murukate`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="min-h-dvh">
      <DetailNav />

      {/* Header */}
      <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="bg-brand-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[720px] -translate-x-1/2"
        />
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {project.category}
            </span>
            {project.nda && (
              <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                <Lock className="h-3 w-3" />
                NDA Protected
              </span>
            )}
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            <div className="bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Type
              </p>
              <p className="mt-1.5 text-sm font-medium">{project.type}</p>
            </div>
            <div className="bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Users
              </p>
              <p className="mt-1.5 text-sm font-medium">{project.users}</p>
            </div>
            <div className="bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Role
              </p>
              <p className="mt-1.5 text-sm font-medium">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* NDA notice */}
      {project.nda && (
        <section className="px-4 pb-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-accent/40 p-5">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  NDA Notice.
                </span>{' '}
                This project is protected under a non-disclosure agreement. To
                respect confidentiality, no actual screens, proprietary data, or
                client identifiers are shown. The case study focuses on the
                problem, my process, and the outcomes.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Overview + Features */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight">Overview</h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Users className="h-4 w-4 text-brand" />
                Key Features
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Flow (consumer apps) */}
      {project.flow && (
        <section className="px-4 py-6">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-2xl font-medium tracking-tight">User Flow</h2>
              <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-5">
                {project.flow.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">
                      {step}
                    </span>
                    {i < project.flow!.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Case study sections */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-12">
          {project.sections.map((section) => (
            <Reveal key={section.heading}>
              <div className="border-t border-border pt-10">
                <h2 className="text-2xl font-medium tracking-tight">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                )}
                {section.bullets && (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-pretty leading-relaxed text-muted-foreground">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="border-t border-border pt-10">
              <h2 className="text-2xl font-medium tracking-tight">Outcomes</h2>
              <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {project.outcomes.map((o) => (
                  <div key={o.label} className="bg-card p-5">
                    <p className="text-2xl font-medium tracking-tight text-brand">
                      {o.value}
                    </p>
                    <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                      {o.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-brand/40 sm:p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Next case study
              </p>
              <p className="mt-2 text-2xl font-medium tracking-tight">
                {next.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {next.category}
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-1">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
