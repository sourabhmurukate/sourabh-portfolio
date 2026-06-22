import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ArrowUpRight, Mail, Phone, FileText } from 'lucide-react'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sourabhmurukate2560@gmail.com',
    href: 'mailto:sourabhmurukate2560@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'in-sourabh-murukate',
    href: 'https://www.linkedin.com/in/sourabhmurukate/',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download Resume',
    href: 'Sourabh_Murukate_UIUX_Designer_1.5YExperience.pdf',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9075990882',
    href: 'tel:+919075990882',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/15 blur-[100px]"
            />
            <SectionLabel index="06">Contact</SectionLabel>

            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Let&apos;s build better digital{' '}
              <span className="font-serif italic text-brand">experiences</span>{' '}
              together.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Open to UI/UX Designer and Product Designer opportunities. If
              you&apos;re hiring or want to collaborate, I&apos;d love to hear
              from you.
            </p>

            <div className="mt-8">
              <a
                href="mailto:sourabhmurukate2560@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c) => (
                <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 bg-card p-5 transition-colors hover:bg-accent/50"
            >
                  <c.icon className="h-5 w-5 text-brand" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium group-hover:text-brand">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
