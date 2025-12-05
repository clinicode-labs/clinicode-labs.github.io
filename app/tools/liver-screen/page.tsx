import { Activity, Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const features = [
    "Single-input calculator",
    "Calculates Child-Pugh, MELD, MELD-Na, and Maddrey’s Discriminant Function",
    "Saves time by outputting all scores simultaneously",
    "Designed for efficient clinical workflow",
]

export default function LiverScreenPage() {
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
                                    <Activity className="h-8 w-8 text-[#0c6a6c]" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl">
                                        The 'One-Stop' Liver Screen
                                    </h1>
                                    <p className="text-lg text-gray-600 mt-2">Comprehensive Liver Function Calculator</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    A single-input calculator. You enter the bilirubin, INR, Creatinine, Na, and Albumin once, and it outputs all relevant scores simultaneously.
                                    No more calculating Child-Pugh, MELD, MELD-Na, and Maddrey’s Discriminant Function separately.
                                </p>

                                {/* Status Badge */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                                        <span className="text-sm font-medium text-amber-800">🚧 In Development</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                            MIT License
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                                <h2 className="text-2xl font-bold text-[#152549] mb-6">Planned Features</h2>
                                <ul className="grid gap-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c6a6c]/10">
                                                <Check className="h-4 w-4 text-[#0c6a6c]" />
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

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
