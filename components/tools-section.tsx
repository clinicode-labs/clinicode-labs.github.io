import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Clock, Brain } from "lucide-react"
import { IconOnlyLogo } from "@/components/logos/icon-only-logo"

const tools = [
  {
    title: "Frailty Calculator",
    description:
      "Point-of-care risk stratification tool for assessing patient frailty and predicting clinical outcomes.",
    icon: Calculator,
  },
  {
    title: "Time Management Tools",
    description:
      "Optimize your clinical workflow with scheduling aids and productivity tools designed for busy physicians.",
    icon: Clock,
  },
  {
    title: "Decision Support Tools",
    description: "Evidence-based clinical decision support to guide diagnosis and treatment planning at the bedside.",
    icon: Brain,
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#152549] sm:text-4xl">Our Tools</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Purpose-built digital tools designed to enhance clinical decision-making and streamline your workflow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border border-gray-200 hover:border-[#0c6a6c]/50 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Watermark logo */}
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <IconOnlyLogo className="h-32 w-32" />
              </div>

              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c6a6c]/10">
                  <tool.icon className="h-6 w-6 text-[#0c6a6c]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#152549]">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{tool.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
