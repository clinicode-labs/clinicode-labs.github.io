"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Clinicode Labs"
            width={260}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
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

        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-[#0c6a6c] hover:bg-[#0a5a5c] text-white">Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#152549]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden animate-in slide-in-from-top-5">
          <div className="container mx-auto flex flex-col space-y-4 p-4">
            <Link
              href="/#tools"
              className="text-sm font-medium text-[#152549] hover:text-[#0c6a6c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Apps
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#152549] hover:text-[#0c6a6c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#152549] hover:text-[#0c6a6c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#0c6a6c] hover:bg-[#0a5a5c] text-white">Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
