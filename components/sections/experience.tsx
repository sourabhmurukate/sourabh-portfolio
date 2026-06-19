import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { Check } from 'lucide-react'

const responsibilities = [
  'Designed end-to-end web and mobile experiences from concept to high-fidelity.',
  'Created user flows, wireframes, prototypes, and polished UI designs.',
  'Collaborated closely with developers and stakeholders across the product lifecycle.',
  'Maintained design systems and reusable component libraries for consistency.',
  'Drove usability-focused improvements based on feedback and heuristics.',
  'Worked on enterprise dashboards and data-dense, workflow-driven applications.',
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel index="02">Experience</SectionLabel>
        </Reveal>

        <Reveal>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            Designing real products in a fast-moving product team.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-9">
            <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-medium">UI/UX Designer</h3>
                <p className="mt-1 text-muted-foreground">
                  Designing Products for Businesses and Everyday Users
                </p>
              </div>
              <span className="inline-flex h-fit items-center rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground">
                1.5 Years · Full-time
              </span>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
