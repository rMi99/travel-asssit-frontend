"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="build/assets/about_1_1-nSYwzD9I.jpg"
                    alt="About Sri Lanka"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="build/assets/about_1_2-DiUHa9l5.jpg"
                    alt="Marine life"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="build/assets/about_1_3-C1N6LAxI.jpg"
                    alt="Yala"
                    width={400}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-[#1ca8cb] font-medium">Discover the Magic of</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Down South</h2>
            <p className="text-gray-600 mb-8">
              Explore the unspoiled beauty of Sri Lanka's southern coast, a region rich with breathtaking landscapes,
              vibrant wildlife, and cultural heritage. Whether you're seeking tranquil beaches, lush greenery, or
              unforgettable adventures, the south offers a perfect escape for every traveler.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1ca8cb]/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#1ca8cb]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Exclusive Experiences</h3>
                  <p className="text-gray-600">
                    From surfing in Weligama's pristine waters to exploring the historic Galle Fort, the southern coast
                    promises unique and personalized adventures tailored to your interests.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1ca8cb]/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#1ca8cb]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Professional Guides and Insights</h3>
                  <p className="text-gray-600">
                    Enjoy guided safaris in Yala National Park, whale watching in Mirissa, and serene nature trails with
                    experienced guides ensuring every moment is extraordinary.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-block bg-[#1ca8cb] hover:bg-[#1795b5] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
