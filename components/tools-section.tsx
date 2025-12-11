"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Timer, Calculator, Activity, TestTube, CalendarClock } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    title: "PomoDoist",
    description:
      "Pomodoro timer that syncs with Todoist. Track focus time, estimate tasks, and get smart productivity insights across all your devices.",
    icon: Timer,
    status: "Available Now",
    slug: "pomodoist",
  },

  {
    title: "Liver Calc",
    description: "High-precision clinical calculator designed for Hepatology and Transplant Medicine. Calculates MELD 3.0, Child-Pugh, and more.",
    icon: Activity,
    status: "Beta Testing",
    slug: "liver-calc",
  },
  {
    title: "Frailty Calculator",
    description:
      "Point-of-care risk stratification tool for assessing patient frailty and predicting clinical outcomes. Coming soon.",
    icon: Calculator,
    status: "In Development",
    slug: "frailty-calculator",
  },
  {
    title: "Electrolyte Replacement Wizard",
    description: "Digitized Queensland Health electrolyte replacement guidelines. Select element (K, Mg, PO4) and level to get recommended dose and route.",
    icon: TestTube,
    status: "In Development",
    slug: "electrolyte-wizard",
  },
  {
    title: "Prep-Pal",
    description: "Visual timeline generator for bowel prep. Enter procedure time to get a simple schedule: \"Stop solids at 10 AM,\" \"Drink First Sachet at 6:00 AM.\"",
    icon: CalendarClock,
    status: "In Development",
    slug: "prep-pal",
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#152549] sm:text-4xl">Our Apps</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Small projects solving specific problems we've encountered in clinical practice.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tools.map((tool, index) => {
            const toolPageHref = `/tools/${tool.slug}`

            return (
              <Card
                key={index}
                className="relative overflow-hidden border border-gray-200 hover:border-[#0c6a6c]/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = toolPageHref}
              >
                {/* Watermark logo */}
                <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <img src="/assets/logo_icon.svg" alt="" className="h-32 w-32" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c6a6c]/10">
                      <tool.icon className="h-6 w-6 text-[#0c6a6c]" />
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#0c6a6c]/10 text-[#0c6a6c]">
                      {tool.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#152549]">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{tool.description}</CardDescription>
                  <a
                    href={toolPageHref}
                    className="mt-4 inline-block text-sm font-medium text-[#0c6a6c] hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn more →
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action for Collaboration */}
        <div className="mt-16 mx-auto max-w-2xl text-center">
          <div className="bg-gradient-to-br from-[#0c6a6c]/5 to-[#152549]/5 rounded-2xl p-8 border border-[#0c6a6c]/20">
            <h3 className="text-2xl font-bold text-[#152549] mb-3">Got an App Idea?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for ways to solve real clinical problems. If you're a physician with an idea for a tool that could help your practice, we'd love to hear from you.
            </p>
            <Link href="/contact">
              <button className="inline-block px-6 py-3 bg-[#0c6a6c] hover:bg-[#0a5a5c] text-white font-medium rounded-lg transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
