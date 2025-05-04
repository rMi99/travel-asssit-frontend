"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Galle Fort",
      location: "Galle",
      image: "images/assets/destination_1_1-D0HJvnt5.jpg",
      description: "A UNESCO World Heritage site with colonial architecture and ocean views.",
    },
    {
      id: 2,
      name: "Hiyare Reservoir",
      location: "Galle",
      image: "images/assets/destination_1_2-C6uN8JgU.jpg",
      description: "A serene nature reserve with diverse wildlife and hiking trails.",
    },
    {
      id: 3,
      name: "Weligama Beach",
      location: "Weligama",
      image: "images/assets/destination_1_3-Cy5LsGbf.jpg",
      description: "Perfect for surfing with gentle waves ideal for beginners.",
    },
    {
      id: 4,
      name: "Yala Safari",
      location: "Hambantota",
      image: "images/assets/destination_1_4-CWH4gRZO.jpg",
      description: "Sri Lanka's premier wildlife sanctuary with leopards and elephants.",
    },
    {
      id: 5,
      name: "Stilt Fishing",
      location: "Koggala",
      image: "images/assets/destination_1_5-wfG2LA8W.jpg",
      description: "Experience the traditional fishing method unique to Sri Lanka.",
    },
    {
      id: 6,
      name: "Mulkirigala Temple",
      location: "Hambantota",
      image: "images/assets/destination_1_6-BUFU524s.jpg",
      description: "Ancient rock temple with stunning panoramic views.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="destinations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1ca8cb] font-medium">Top Destinations</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Top Travel Spots in Sri Lanka</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover the most beautiful and captivating locations across the Sri Lanka, from historic
            forts to pristine beaches.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <p className="font-medium">{destination.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-[#1ca8cb] mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <a
                  href="#"
                  className="inline-block mt-2 text-[#1ca8cb] font-medium hover:text-[#1795b5] transition-colors"
                >
                  View All
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-transparent border-2 border-[#1ca8cb] text-[#1ca8cb] hover:bg-[#1ca8cb] hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            View All Destinations
          </a>
        </div>
      </div>
    </section>
  )
}
