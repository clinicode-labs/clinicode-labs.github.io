import { ToolLayout } from "@/components/tool-layout"
import { Activity, Check, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
    "Single-Input Calculator - Enter values once for MELD 3.0, MELD-Na, Child-Pugh, Maddrey's DF, and ALBI Grade",
    "SI / US Unit Support - Seamless toggle between systems without precision loss",
    "MELD 3.0 Compliance - Strict adherence to OPTN 2023 guidelines",
    "Dialysis-Aware - Logic automatically adjusts for dialysis history",
]

export default function LiverCalcPage() {
    return (
        <ToolLayout
            title="Liver Calc"
            subtitle="High-Precision Hepatology Calculator"
            icon={Activity}
        >
            {/* Disclaimer */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-8">
                <h3 className="font-semibold text-amber-900 mb-2">⚖️ Medical Disclaimer</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                    For Medical Professionals Only. This application is intended as a clinical decision support tool.
                    While rigorous testing has been performed to ensure compliance with OPTN/UNOS formulas, the results should not be the sole basis for medical decisions.
                    Clinical judgment must always supersede calculated scores.
                </p>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Liver Calc is a high-precision clinical calculator designed for Hepatology and Transplant Medicine.
                    It implements the latest OPTN 2023 calculations for liver disease severity, strictly adhering to medical standards for precision, safety, and usability.
                </p>

                {/* Status Badge */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                        <span className="text-sm font-medium text-blue-800">🧪 Beta Testing</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Link href="https://github.com/AshaneH/liver-calc" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="text-[#152549] border-[#152549]/20 hover:bg-[#152549]/5">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Source (GitHub)
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/license" className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200 transition-colors">
                        MIT License
                    </Link>
                    <span className="text-sm text-gray-500">Open Source Software</span>
                </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-[#152549] mb-6">Key Capabilities</h2>
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
