import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { Compass, Layers, Target } from 'lucide-react'

const principles = [
  {
    icon: Compass,
    title: 'Research-led',
    body: 'Every decision starts with understanding the user — their goals, context, and the problems worth solving.',
  },
  {
    icon: Target,
    title: 'Business-aware',
    body: 'Great design balances user needs with business goals, turning insight into measurable outcomes.',
  },
  {
    icon: Layers,
    title: 'Systems-minded',
    body: 'I build with reusable components and clear patterns so products stay consistent and scalable.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel index="01">About Me</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-pretty text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              <p>
                I'm a UI/UX Designer passionate about creating simple, user-friendly experiences. 
                Over the past 1.5 years, I've designed enterprise dashboards and consumer applications, 
                focusing on turning complex workflows into intuitive solutions.
              </p>
              <p className="text-lg text-muted-foreground sm:text-xl">
                I believe great design starts with understanding users, solving real problems, and reducing friction.
                  My goal is to create experiences that are easy to use while meeting both user and business needs.
              </p>
              <p className="text-lg text-muted-foreground sm:text-xl">
                I enjoy working closely with teams, learning from user feedback, and continuously improving products
                through thoughtful design decisions. For me, good design is not just about how it looks—it's about <span className="text-foreground">
                creating experiences that feel natural, efficient, and meaningful.</span>{' '}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-3">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
                >
                  <p.icon className="h-5 w-5 text-brand" />
                  <h3 className="mt-4 text-base font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
