import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Work } from '@/components/sections/work'
import { Process } from '@/components/sections/process'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <main className="min-h-dvh">
      <SiteNav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Process />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
