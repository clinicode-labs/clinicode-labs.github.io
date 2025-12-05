import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl">
                            <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl mb-6">
                                About Clinicode Labs
                            </h1>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Hi, I'm <span className="font-semibold text-[#0c6a6c]">Ashane Herath</span>, a Basic Physician Training (BPT) candidate
                                    working in Queensland with an interest in Gastroenterology and Hepatology.
                                </p>

                                <div className="bg-[#0c6a6c]/5 border-l-4 border-[#0c6a6c] p-6 my-8">
                                    <p className="text-lg text-gray-700 italic">
                                        "I believe leveraging technology leads to a more human experience for our patients,
                                        allowing us to put our time towards what matters."
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-[#152549] mt-12 mb-4">The Mission</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Clinicode Labs is my way of building practical tools that solve real problems I encounter in clinical practice.
                                    Just simple apps that make the day-to-day work a bit easier.
                                </p>

                                <h2 className="text-2xl font-bold text-[#152549] mt-12 mb-4">Why Build These Tools?</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Technology should help us focus on what we do best, rather than getting bogged down in everyday minutiae or admin tasks.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Each tool is built from a genuine need I've experienced myself. I started this project because some of it could help others, too.
                                </p>

                                <h2 className="text-2xl font-bold text-[#152549] mt-12 mb-4">Collaboration</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Got an idea for a tool that could help your practice? I'm always open to collaboration and feedback from
                                    other clinicians. Reach out via the <a href="/contact" className="text-[#0c6a6c] hover:underline font-medium">contact page</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
