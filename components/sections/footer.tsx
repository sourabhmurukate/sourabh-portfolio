import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-[11px] font-semibold text-background">
            SM
          </span>
          <span className="font-medium">Sourabh Murukate</span>
        </div>
        <p className="text-sm text-muted-foreground">
          UI/UX Designer · Maharashtra, India
        </p>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link href="/#work" className="transition-colors hover:text-foreground">
            Work
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-5xl text-center text-xs text-muted-foreground sm:text-left">
        © {new Date().getFullYear()} Sourabh Murukate ~ Portfolio
        intent.
      </p>
    </footer>
  )
}
