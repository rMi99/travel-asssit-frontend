"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Sri Lanka's Coastal Gem of Heritage and Serenity",
      subtitle: "Discover Province",
      description:
        "Explore pristine beaches, vibrant wildlife, and cultural heritage in the heart of Sri Lanka.",
    },
    {
      title: "Unforgettable Adventures Await",
      subtitle: "Experience the Magic",
      description: "From whale watching to historic forts, create memories that will last a lifetime.",
    },
    {
      title: "Connect with Local Traditions",
      subtitle: "Cultural Immersion",
      description: "Discover authentic experiences and connect with the rich cultural heritage of Sri Lanka.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="home" className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline style={{ visibility: "visible" }}>
          <source src="https://rtb.sgp1.cdn.digitaloceanspaces.com/media/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#1ca8cb] text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
          >
            {slides[currentSlide].subtitle}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg mb-8 max-w-2xl"
          >
            {slides[currentSlide].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#destinations"
              className="bg-[#1ca8cb] hover:bg-[#1795b5] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center"
            >
              Explore Destinations
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1ca8cb] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              About Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
