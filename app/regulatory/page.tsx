import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RegulatoryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl mb-6">
                            Regulatory Notice
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                                <h2 className="text-xl font-bold text-amber-800 mt-0 mb-3">
                                    Therapeutic Goods Administration (TGA) Notice
                                </h2>
                                <p className="text-amber-900 mb-0">
                                    This notice applies to software published by Clinicode Labs in accordance with Australian therapeutic goods regulations.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[#152549] mt-8 mb-4">Exempt Medical Device Status</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Software published by Clinicode Labs that provides clinical decision support is classified as
                                an <strong>exempt medical device</strong> under the{" "}
                                <Link
                                    href="https://www.legislation.gov.au/Series/F2002B00237"
                                    target="_blank"
                                    className="text-[#0c6a6c] hover:underline"
                                >
                                    Therapeutic Goods (Medical Devices) Regulations 2002
                                </Link>.
                            </p>

                            <h3 className="text-xl font-bold text-[#152549] mt-8 mb-3">Exemption Criteria</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our clinical decision support software meets the exemption criteria because it:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li>
                                    Is <strong>not intended</strong> to directly process or analyse a medical image or a signal
                                    from another medical device (including an IVD medical device)
                                </li>
                                <li>
                                    Is intended <strong>only</strong> for the purpose of providing or supporting a recommendation
                                    to a health professional about prevention, diagnosis, curing or alleviating a disease,
                                    ailment, defect or injury
                                </li>
                                <li>
                                    Is <strong>not intended</strong> to replace the clinical judgement of a healthcare professional
                                    to make a clinical diagnosis or treatment decision regarding an individual patient
                                </li>
                            </ul>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                                <h3 className="text-lg font-bold text-blue-800 mt-0 mb-3">
                                    Important: Clinical Judgement
                                </h3>
                                <p className="text-blue-900 mb-0">
                                    All software tools provided by Clinicode Labs are intended to support—not replace—the
                                    clinical judgement of qualified healthcare professionals. Users should always exercise
                                    their own professional judgement when making clinical decisions.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[#152549] mt-8 mb-4">Regulatory Framework</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For more information about the regulation of software-based medical devices in Australia,
                                please refer to the TGA guidance:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                                <li>
                                    <Link
                                        href="https://www.tga.gov.au/resources/resource/guidance/understanding-if-your-software-based-medical-device-excluded-our-regulation"
                                        target="_blank"
                                        className="text-[#0c6a6c] hover:underline"
                                    >
                                        Understanding if your software-based medical device is excluded from regulation
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.tga.gov.au/resources/resource/guidance/regulation-software-based-medical-devices"
                                        target="_blank"
                                        className="text-[#0c6a6c] hover:underline"
                                    >
                                        Regulation of software-based medical devices
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.tga.gov.au/resources/resource/guidance/clinical-decision-support-software"
                                        target="_blank"
                                        className="text-[#0c6a6c] hover:underline"
                                    >
                                        Clinical decision support software guidance
                                    </Link>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-[#152549] mt-8 mb-4">Contact</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about our regulatory status or compliance, please{" "}
                                <Link href="/contact" className="text-[#0c6a6c] hover:underline">
                                    contact us
                                </Link>.
                            </p>


                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
