import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <img src="/assets/logo.svg" alt="Clinicode Labs" className="h-20 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#tools" className="text-sm font-medium text-[#152549] hover:text-[#0c6a6c] transition-colors">
            Apps
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#152549] hover:text-[#0c6a6c] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-[#152549] hover:text-[#0c6a6c] transition-colors">
            Contact
          </Link>
        </nav>

        <Link href="/contact">
          <Button className="bg-[#0c6a6c] hover:bg-[#0a5a5c] text-white">Contact</Button>
        </Link>
      </div>
    </header>
  )
}
