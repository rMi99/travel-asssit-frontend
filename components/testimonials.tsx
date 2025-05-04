"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United Kingdom",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Our trip to Sri Lanka was absolutely magical! The beaches were pristine, the wildlife encounters were unforgettable, and the local guides were incredibly knowledgeable. We'll definitely be back!",
    },
    {
      id: 2,
      name: "David Chen",
      location: "Australia",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The whale watching experience in Mirissa was the highlight of our trip. Seeing blue whales in their natural habitat was breathtaking. The accommodations and service throughout our stay were top-notch.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Spain",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "From the moment we arrived, we were treated like family. The cultural experiences were authentic, and the food was incredible. The beaches of Sri Lanka are some of the most beautiful I've ever seen.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Travelers Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from travelers who have experienced the magic of Sri Lanka with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl p-8 shadow-lg"
                  >
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic">"{testimonial.text}"</blockquote>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-teal-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
