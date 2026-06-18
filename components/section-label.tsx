export function SectionLabel({
  index,
  children,
}: {
  index: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-brand">
      <span className="font-mono text-xs text-muted-foreground">{index}</span>
      <span className="h-px w-8 bg-brand/40" />
      {children}
    </div>
  )
}
