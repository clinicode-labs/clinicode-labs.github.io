import { Calculator, Check } from "lucide-react"
import Link from "next/link"

const features = [
    "Point-of-care risk stratification",
    "Predicts clinical outcomes",
    "Evidence-based scoring system",
    "Quick assessment tool for busy clinicians",
]

export default function FrailtyCalculatorPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0c6a6c]/10">
                                <Calculator className="h-8 w-8 text-[#0c6a6c]" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl">
                                    Frailty Calculator
                                </h1>
                                <p className="text-lg text-gray-600 mt-2">Clinical Frailty Scale Assessment</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A point-of-care risk stratification tool for assessing patient frailty and predicting clinical outcomes.
                                Designed for quick, evidence-based assessments in busy clinical environments.
                            </p>

                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                                <span className="text-sm font-medium text-amber-800">🚧 In Development</span>
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
    )
}
