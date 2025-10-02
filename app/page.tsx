import { HeroSection } from "@/components/hero-section"
import { StoryTimeline } from "@/components/story-timeline"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StoryTimeline />
      <ContactSection />
    </main>
  )
}
