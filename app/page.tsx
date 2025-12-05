import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ToolsSection } from "@/components/tools-section"
import { WhySection } from "@/components/why-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <WhySection />
      <Footer />
    </main>
  )
}
