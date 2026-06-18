'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'Skills', href: '/#skills' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        // Functional update so React bails out of re-render when unchanged.
        setScrolled(window.scrollY > 12)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4',
          scrolled
            ? 'border-border bg-background/80 backdrop-blur-xl shadow-sm'
            : 'border-transparent bg-transparent',
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 pl-1 text-sm font-medium tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-[11px] font-semibold text-background">
            SM
          </span>
          <span className="hidden sm:inline">Sourabh Murukate</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Contact
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  'h-0.5 w-4 bg-foreground transition-transform',
                  open && 'translate-y-1.5 rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-0.5 w-4 bg-foreground transition-opacity',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-0.5 w-4 bg-foreground transition-transform',
                  open && '-translate-y-1.5 -rotate-45',
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-[68px] rounded-2xl border border-border bg-background/95 p-2 backdrop-blur-xl shadow-lg md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
