import { ToolLayout } from "@/components/tool-layout"
import { CalendarClock, Check } from "lucide-react"
import Link from "next/link"

const features = [
    "Input Procedure Time: Simply enter the scheduled procedure time (e.g., 2:00 PM)",
    "Visual Timeline: Generates a simple, easy-to-understand visual schedule",
    "Clear Instructions: \"Stop solids at 10 AM yesterday,\" \"Drink First Sachet at 6:00 AM\"",
    "Patient Friendly: Show it to the patient on the ward or print/text it to them",
]

export default function PrepPalPage() {
    return (
        <ToolLayout
            title="Prep-Pal"
            subtitle="Bowel Prep Timeline Generator"
            icon={CalendarClock}
        >
            {/* Physician Review Warning */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <p className="text-sm font-semibold text-blue-800 mb-2">👨‍⚕️ PHYSICIAN REVIEW REQUIRED</p>
                <p className="text-sm text-blue-700">
                    Generated schedules should always be reviewed by a physician before being provided to the patient to ensure accuracy and appropriateness for their specific clinical situation.
                </p>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Poor bowel preparation cancels lists and wastes time. Patients often struggle with the complex timing of split-dose prep. Prep-Pal is a bedside tool designed to solve this problem by generating clear, visual timelines.
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

            {/* Planned Features Card */}
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
