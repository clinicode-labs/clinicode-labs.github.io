import { Check } from "lucide-react"

const features = [
  "Created by practicing physicians who understand clinical needs",
  "Evidence-based algorithms and calculations",
  "Designed for speed and efficiency in high-pressure environments",
  "Regular updates based on latest medical guidelines",
  "HIPAA-compliant and secure",
]

export function WhySection() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#152549] overflow-hidden">
      {/* Background watermark logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
        <img src="/../assets/logo_knockout.svg" alt="" className="h-[500px] w-auto" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Clinicode?</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              We&apos;re not just developers building medical software — we&apos;re physicians who code. Every tool we
              create stems from real clinical problems we&apos;ve faced ourselves.
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
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#0c6a6c]">10k+</div>
                  <div className="mt-2 text-gray-300">Physicians Trust Us</div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="mt-1 text-sm text-gray-400">Clinical Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="mt-1 text-sm text-gray-400">Uptime</div>
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
