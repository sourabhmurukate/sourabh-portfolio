import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const steps = [
  { name: 'Discover', body: 'Understand the business goals, constraints, and the problem space.' },
  { name: 'Research', body: 'Talk to users, study behavior, and gather qualitative and quantitative signals.' },
  { name: 'Define', body: 'Synthesize insights into clear problem statements, personas, and opportunities.' },
  { name: 'Ideate', body: 'Explore a wide range of solutions through sketching and divergent thinking.' },
  { name: 'Wireframe', body: 'Shape structure and flow with low-fidelity layouts and information architecture.' },
  { name: 'Design', body: 'Craft high-fidelity, accessible UI grounded in a consistent design system.' },
  { name: 'Prototype', body: 'Bring flows to life with interactive prototypes for realistic feedback.' },
  { name: 'Test', body: 'Validate with users, identify friction, and measure against success criteria.' },
  { name: 'Iterate', body: 'Refine based on evidence — design is never done in one pass.' },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel index="04">Design Process</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            A repeatable process that turns ambiguity into clarity.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.name}
              delay={(i % 3) * 80}
              className="group relative bg-card p-6 transition-colors hover:bg-accent/50"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-medium">{step.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
