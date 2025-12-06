import { ToolLayout } from "@/components/tool-layout"
import { Smartphone, Check, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
    "Native mobile interface for easier navigation",
    "Offline bookmarks for important guidelines",
    "Fast search across all clinical content",
    "Persistent login via Queensland Health SSO",
    "Automatic caching of visited pages",
]

export default function MSHPrescribePage() {
    return (
        <ToolLayout
            title="MSHPrescribe App"
            subtitle="Unofficial Mobile App for Clinical Guidelines"
            icon={Smartphone}
        >
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

                {/* Status Badge and Links */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                        <span className="text-sm font-medium text-blue-800">🧪 Beta Testing</span>
                    </div>
                    <Link href="https://github.com/AshaneH/mshprescribe-app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="text-[#152549] border-[#152549]/20 hover:bg-[#152549]/5 h-9">
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
        </ToolLayout>
    )
}
