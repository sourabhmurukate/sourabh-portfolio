import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react'

const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '4+', label: 'Featured Projects' },
  { value: '4', label: 'Design Tools' },
  { value: '4', label: 'AI Tools' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40"
    >
      <div
        aria-hidden
        className="bg-brand-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[820px] -translate-x-1/2"
      />
      <div className="mx-auto max-w-5xl">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand/60" />
              <span className="h-2 w-2 rounded-full bg-brand" />
            </span>
            Open to UI/UX & Product Designer roles
          </span>
        </div>

        <h1 className="mt-7 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:80ms]">
          Designing intuitive digital experiences that{' '}
          <span className="font-serif italic text-brand">simplify</span> complex
          user journeys.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:160ms]">
          UI/UX Designer with 1.5 years of experience creating user-centered web
          and mobile products through research, strategy, and visual design.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View My Work
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            Contact Me
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <span className="inline-flex items-center gap-1.5 pl-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Maharashtra, India
          </span>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4 animate-fade-up [animation-delay:320ms]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-5 py-6">
              <dt className="text-3xl font-medium tracking-tight sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
