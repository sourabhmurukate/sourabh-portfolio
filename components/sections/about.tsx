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
                I&apos;m a UI/UX Designer who fell in love with design through a
                simple realization — good interfaces don&apos;t just look good,
                they make people&apos;s lives easier.
              </p>
              <p className="text-lg text-muted-foreground sm:text-xl">
                My journey started with curiosity about why some products feel
                effortless while others frustrate. That led me deep into user
                research, interaction design, and visual craft. Over the past
                1.5 years I&apos;ve designed enterprise dashboards used by
                engineers and consumer apps used on the go — learning to
                translate complexity into clarity.
              </p>
              <p className="text-lg text-muted-foreground sm:text-xl">
                My philosophy is simple: <span className="text-foreground">
                  start with the user, design with intent, and validate with
                  evidence.
                </span>{' '}
                I solve problems by listening first, mapping the real journey,
                and removing friction step by step — always balancing what users
                need with what the business is trying to achieve. What drives me
                is the craft of making the complex feel intuitive.
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
