import { Button } from "@/components/ui/button"
import { Timer, ExternalLink, Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const features = [
    "Pomodoro Timer - Classic 25/5/15 minute work/break cycles",
    "Todoist Integration - Auto-loads all your active tasks",
    "Smart Prioritisation - Task scoring based on urgency and importance",
    "Productivity Insights - Peak hours, patterns, burnout detection",
    "Cross-Device Sync - Via Google Drive",
    "PWA Support - Install on mobile like a native app",
]

export default function PomoDoistPage() {
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
                                    <Timer className="h-8 w-8 text-[#0c6a6c]" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl">
                                        PomoDoist
                                    </h1>
                                    <p className="text-lg text-gray-600 mt-2">Pomodoro Timer for Todoist</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    A beautiful Pomodoro timer that syncs with your Todoist tasks. Track your focus time, get smart insights,
                                    and maintain productivity across all your devices.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <Link href="https://pomodoro-todoist.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-[#0c6a6c] hover:bg-[#0a5a5c] text-white">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Launch PomoDoist
                                        </Button>
                                    </Link>
                                    <Link href="https://github.com/AshaneH/pomodoro-todoist" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="text-[#152549] border-[#152549]/20 hover:bg-[#152549]/5">
                                            View Source (GitHub)
                                        </Button>
                                    </Link>
                                </div>

                                <div className="mt-6 flex items-center gap-2">
                                    <Link href="/license" className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200 transition-colors">
                                        MIT License
                                    </Link>
                                    <span className="text-sm text-gray-500">Open Source Software</span>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                                <h2 className="text-2xl font-bold text-[#152549] mb-6">Key Features</h2>
                                <ul className="grid gap-4 md:grid-cols-2">
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
