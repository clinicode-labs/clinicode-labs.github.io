import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  tools: [
    { name: "PomoDoist", href: "/tools/pomodoist" },
    { name: "Frailty Calculator", href: "/tools/frailty-calculator" },
    { name: "MSHPrescribe App", href: "/tools/mshprescribe" },
    { name: "The \"One-Stop\" Liver Screen", href: "/tools/liver-screen" },
    { name: "Electrolyte Replacement Wizard", href: "/tools/electrolyte-wizard" },
    { name: "Prep-Pal", href: "/tools/prep-pal" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Regulatory", href: "/regulatory" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#152549] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Image
              src="/assets/logo_darkmode.svg"
              alt="Clinicode Labs"
              width={520}
              height={160}
              className="h-40 w-auto"
            />
            <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
              Simple, practical tools built by Australian doctors to make clinical workflow easier.
            </p>
          </div>

          {/* Tools links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Apps</h3>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#0c6a6c] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#0c6a6c] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#0c6a6c] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/regulatory" className="text-gray-400 hover:text-[#0c6a6c] transition-colors">
                  Regulatory
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-gray-400 hover:text-[#0c6a6c] transition-colors">
                  MIT License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Clinicode Labs. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-400 mt-2">
            <Link href="https://github.com/clinicode-labs/clinicode-labs.github.io" className="hover:text-[#0c6a6c] underline" target="_blank" rel="noopener noreferrer">
              Source code
            </Link>{" "}
            is{" "}
            <Link href="/license" className="hover:text-[#0c6a6c] underline">
              MIT Licensed
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  )
}
