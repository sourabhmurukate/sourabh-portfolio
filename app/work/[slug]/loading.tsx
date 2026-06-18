import { DetailNav } from '@/components/detail-nav'

function Bar({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-accent ${className}`} />
  )
}

export default function Loading() {
  return (
    <main className="min-h-dvh">
      <DetailNav />
      <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="bg-brand-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[720px] -translate-x-1/2"
        />
        <div className="mx-auto max-w-3xl" aria-busy="true" aria-live="polite">
          <span className="sr-only">Loading case study…</span>

          <div className="flex flex-wrap items-center gap-2">
            <Bar className="h-6 w-28" />
            <Bar className="h-6 w-24" />
            <Bar className="h-6 w-12" />
          </div>

          <Bar className="mt-6 h-12 w-3/4" />
          <Bar className="mt-3 h-12 w-1/2" />

          <div className="mt-6 space-y-3">
            <Bar className="h-4 w-full" />
            <Bar className="h-4 w-11/12" />
            <Bar className="h-4 w-4/5" />
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-card p-5">
                <Bar className="h-3 w-16" />
                <Bar className="mt-2 h-4 w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <Bar className="h-7 w-40" />
          <Bar className="h-4 w-full" />
          <Bar className="h-4 w-11/12" />
          <Bar className="h-4 w-3/4" />
        </div>
      </section>
    </main>
  )
}
