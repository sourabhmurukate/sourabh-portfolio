'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function DetailNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-border bg-background/80 px-3 py-2 backdrop-blur-xl sm:px-4">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          All work
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
