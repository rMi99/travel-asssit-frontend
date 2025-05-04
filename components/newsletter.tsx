"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email)
    setSubmitted(true)
    setEmail("")

    // Reset submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Travel Inspiration</h2>
            <p className="mb-8">
              Subscribe to our newsletter for exclusive travel tips, special offers, and updates on the best experiences
              in Southern Sri Lanka.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-800"
                required
              />
              <button
                type="submit"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Subscribe
              </button>
            </form>

            {submitted && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-teal-100">
                Thank you for subscribing! We'll be in touch soon.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
