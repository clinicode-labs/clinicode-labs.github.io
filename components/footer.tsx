import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  tools: [
    { name: "PomoDoist", href: "https://pomodoro-todoist.vercel.app/" },
    { name: "Frailty Calculator", href: "#tools" },
    { name: "MSHPrescribe App", href: "#tools" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#152549] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <img src="/assets/logo_darkmode.svg" alt="CliniCode Labs" className="h-24 w-auto" />
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
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#0c6a6c] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Clinicode Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
