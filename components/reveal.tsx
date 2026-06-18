'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState, type ReactNode } from 'react'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: keyof React.JSX.IntrinsicElements
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Honor reduced-motion: skip the observer and reveal instantly.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Component = Tag as any

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 will-change-[opacity,transform]',
        className,
      )}
    >
      {children}
    </Component>
  )
}
