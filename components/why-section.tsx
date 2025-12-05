import { Check } from "lucide-react"

const features = [
  "Built by practicing physicians in Australia",
  "Solving real problems we've encountered ourselves",
  "Open to collaboration and feedback from other doctors",
  "Simple, focused tools that do one thing well",
  "Privacy-focused and secure by design",
]

export function WhySection() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#152549] overflow-hidden">
      {/* Background watermark logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
        <img src="/assets/logo_knockout.svg" alt="" className="h-[500px] w-auto" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Clinicode?</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              We're junior doctors who code in our spare time. These are tools we've built to solve problems we've actually faced in our own practice. Nothing fancy, just practical solutions.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c6a6c]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0c6a6c]/20 rounded-2xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-5xl font-bold text-[#0c6a6c]">Early Stage</div>
                    <div className="mt-2 text-gray-300">Just Getting Started</div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Small team, big ambitions. Building one useful tool at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
