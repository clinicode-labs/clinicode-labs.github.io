import { Calculator, Check } from "lucide-react"
import Link from "next/link"
import { ToolLayout } from "@/components/tool-layout"

const features = [
    "Point-of-care risk stratification",
    "Predicts clinical outcomes",
    "Evidence-based scoring system",
    "Quick assessment tool for busy clinicians",
]

export default function FrailtyCalculatorPage() {
    return (
        <ToolLayout
            title="Frailty Calculator"
            subtitle="Clinical Frailty Scale Assessment"
            icon={Calculator}
        >
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A point-of-care risk stratification tool for assessing patient frailty and predicting clinical outcomes.
                    Designed for quick, evidence-based assessments in busy clinical environments.
                </p>

                {/* Status Badge */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                        <span className="text-sm font-medium text-amber-800">🚧 In Development</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/license" className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200 transition-colors">
                        MIT License
                    </Link>
                    <span className="text-sm text-gray-500">Open Source Software</span>
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
        </ToolLayout>
    )
}
