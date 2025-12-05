import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LicensePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="bg-gradient-to-b from-white to-gray-50">
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl">
                            <h1 className="text-3xl font-bold tracking-tight text-[#152549] sm:text-4xl mb-8">
                                MIT License
                            </h1>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-gray-700 leading-relaxed font-mono text-sm whitespace-pre-wrap">
                                <p className="mb-6">Copyright 2025 Clinicode Labs</p>

                                <p className="mb-6">
                                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                                </p>

                                <p className="mb-6">
                                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                                </p>

                                <p>
                                    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
