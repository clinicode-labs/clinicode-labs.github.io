import { Smartphone, Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const features = [
    "Native mobile interface for easier navigation",
    "Offline bookmarks for important guidelines",
    "Fast search across all clinical content",
    "Persistent login via Queensland Health SSO",
    "Automatic caching of visited pages",
]

export default function MSHPrescribePage() {
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
                                    <Smartphone className="h-8 w-8 text-[#0c6a6c]" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl">
                                        MSHPrescribe App
                                    </h1>
                                    <p className="text-lg text-gray-600 mt-2">Unofficial Mobile App for Clinical Guidelines</p>
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
                                <p className="text-sm font-semibold text-amber-800 mb-2">⚠️ UNOFFICIAL PROJECT</p>
                                <p className="text-sm text-amber-700">
                                    This app is independently developed and not affiliated with Metro South Health or Queensland Health.
                                </p>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    An unofficial native mobile app for accessing MSHPrescribe clinical guidelines offline on your phone.
                                    Designed specifically for Queensland Health clinicians who need quick access to clinical decision support tools.
                                </p>

                                {/* Status Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                                    <span className="text-sm font-medium text-blue-800">🧪 Beta Testing</span>
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

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        <strong>Platform Support:</strong> Android (v5.0+), iOS coming soon
                                    </p>
                                </div>
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
