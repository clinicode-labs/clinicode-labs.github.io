import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface ToolLayoutProps {
    title: string
    subtitle: string
    icon: LucideIcon
    children: React.ReactNode
}

export function ToolLayout({ title, subtitle, icon: Icon, children }: ToolLayoutProps) {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="bg-gradient-to-b from-white to-gray-50">
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0c6a6c]/10">
                                    <Icon className="h-8 w-8 text-[#0c6a6c]" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl">
                                        {title}
                                    </h1>
                                    <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
                                </div>
                            </div>

                            {children}

                            {/* Back Link */}
                            <div className="mt-8 text-center">
                                <Link href="/#tools" className="text-[#0c6a6c] hover:underline font-medium">
                                    ← Back to all apps
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
