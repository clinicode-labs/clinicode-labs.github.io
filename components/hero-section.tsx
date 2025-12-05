import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#0c6a6c]/5 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl md:text-6xl text-balance">
            Tools Built by Physicians, For Physicians.
          </h1>
          <p className="mt-6 text-lg text-gray-600 md:text-xl leading-relaxed">
            Simple, practical tools to make your clinical workflow a bit easier. Built in Australia by doctors who understand the daily challenges.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-[#0c6a6c] hover:bg-[#0a5a5c] text-white">
              View Apps
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#152549] text-[#152549] hover:bg-[#152549] hover:text-white bg-transparent"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
