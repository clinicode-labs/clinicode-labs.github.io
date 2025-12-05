import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CalendarClock, Check } from "lucide-react"
import Link from "next/link"

export default function PrepPalPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="bg-gradient-to-b from-white to-gray-50">
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl">
                            {/* Header */}
                            <div className="mb-12 text-center">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0c6a6c]/10 text-[#0c6a6c]">
                                    <CalendarClock className="h-8 w-8" />
                                </div>
                                <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl">
                                    Prep-Pal
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Visual timeline generator for bowel prep.
                                </p>
                            </div>

                            {/* Status Badge */}
                            <div className="mb-12 flex flex-col items-center gap-4 justify-center">
                                <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                                    🚧 In Development
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link href="/license" className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200 transition-colors">
                                        MIT License
                                    </Link>
                                    <span className="text-sm text-gray-500">Open Source Software</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg mx-auto text-gray-600">
                                <p>
                                    Poor bowel preparation cancels lists and wastes time. Patients often struggle with the complex timing of split-dose prep. Prep-Pal is a bedside tool designed to solve this problem.
                                </p>

                                <h3 className="text-[#152549] font-bold mt-8 mb-4">How it works</h3>
                                <ul className="space-y-4 list-none pl-0">
                                    <li className="flex gap-3">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c6a6c]/10">
                                            <Check className="h-4 w-4 text-[#0c6a6c]" />
                                        </div>
                                        <span><strong>Input Procedure Time:</strong> Simply enter the scheduled procedure time (e.g., 2:00 PM).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c6a6c]/10">
                                            <Check className="h-4 w-4 text-[#0c6a6c]" />
                                        </div>
                                        <span><strong>Visual Timeline:</strong> Generates a simple, easy-to-understand visual schedule.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c6a6c]/10">
                                            <Check className="h-4 w-4 text-[#0c6a6c]" />
                                        </div>
                                        <span><strong>Clear Instructions:</strong> "Stop solids at 10 AM yesterday," "Drink First Sachet at 6:00 AM."</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c6a6c]/10">
                                            <Check className="h-4 w-4 text-[#0c6a6c]" />
                                        </div>
                                        <span><strong>Patient Friendly:</strong> Show it to the patient on the ward or print/text it to them.</span>
                                    </li>
                                </ul>

                                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <h4 className="text-blue-900 font-semibold mb-2">Physician Review Required</h4>
                                    <p className="text-blue-800 text-sm mb-0">
                                        Generated schedules should always be reviewed by a physician before being provided to the patient to ensure accuracy and appropriateness for their specific clinical situation.
                                    </p>
                                </div>
                            </div>

                            {/* Back Link */}
                            <div className="mt-12 text-center">
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
