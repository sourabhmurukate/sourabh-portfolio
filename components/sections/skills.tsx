import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const groups = [
  {
    title: 'UX Design',
    items: [
      'User Research',
      'User Personas',
      'User Flows',
      'Information Architecture',
      'Wireframing',
      'Usability Testing',
    ],
  },
  {
    title: 'UI Design',
    items: [
      'Visual Design',
      'Responsive Design',
      'Accessibility',
      'Design Systems',
      'Component Libraries',
      'Prototyping',
    ],
  },
  {
    title: 'Design Tools',
    items: [
      'Figma',
      'Figma Components',
      'Auto Layout',
      'Interactive Prototyping',
    ],
  },
  {
    title: 'AI Tools',
    items: ['ChatGPT', 'Claude', 'Lovable', 'Uizard'],
  },
]

const collaboration = [
  'Developer Handoff',
  'Stakeholder Communication',
  'Cross-functional Collaboration',
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel index="05">Skills &amp; Toolkit</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            The craft, methods, and tools I work with.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 2) * 100}
              className="rounded-3xl border border-border bg-card p-6 sm:p-7"
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm transition-colors hover:border-brand/50 hover:text-brand"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Collaboration
            </h3>
            <div className="flex flex-wrap gap-2">
              {collaboration.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
