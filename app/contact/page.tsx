"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")

        // Create mailto link with form data
        const mailtoLink = `mailto:clinicodelabs@gmail.com?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`

        window.location.href = mailtoLink
        setStatus("success")

        // Reset form after a delay
        setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" })
            setStatus("idle")
        }, 2000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-2xl">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tight text-[#152549] sm:text-5xl mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-gray-600">
                                Have an idea for a clinical tool? Want to collaborate? I'd love to hear from you.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c6a6c]/10">
                                    <Mail className="h-6 w-6 text-[#0c6a6c]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email us directly at</p>
                                    <a
                                        href="mailto:clinicodelabs@gmail.com"
                                        className="text-[#0c6a6c] hover:underline font-medium"
                                    >
                                        clinicodelabs@gmail.com
                                    </a>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6a6c] focus:border-transparent outline-none transition"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6a6c] focus:border-transparent outline-none transition"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6a6c] focus:border-transparent outline-none transition"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6a6c] focus:border-transparent outline-none transition resize-none"
                                        placeholder="Tell me about your idea or question..."
                                    />
                                </div>

                                {status === "success" && (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <p className="text-green-800 text-sm">
                                            Opening your email client... If it doesn't open automatically, email us at clinicodelabs@gmail.com
                                        </p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-[#0c6a6c] hover:bg-[#0a5a5c] text-white"
                                >
                                    {status === "submitting" ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
