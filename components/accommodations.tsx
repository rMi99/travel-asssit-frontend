"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function Accommodations() {
  const bungalows = [
    {
      id: 1,
      name: "Kanchana Bungalow",
      image: "https://rtb.sgp1.cdn.digitaloceanspaces.com/media/cXlsIRHtGsxbNKhmcdEeDOe31FRo9TXbCsSzJzyl.jpg",
      link: "#",
    },
    {
      id: 2,
      name: "Kandula Bungalow",
      image: "https://rtb.sgp1.cdn.digitaloceanspaces.com/media/qu2FqYEMonNZ0I0p92O5Toy59M0SB25eX0frPG6z.jpg",
      link: "#",
    },
    {
      id: 3,
      name: "Two Store House (The view bungalow)",
      image: "https://rtb.sgp1.cdn.digitaloceanspaces.com/media/A2vUTncFskxYDX0FDKCMO6zyhKq1yEFJq1NApIv5.jpg",
      link: "#",
    },
  ]

  return (
    <section
      id="accommodations"
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('images/assets/tour_bg_1-B30_Usb2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-white font-medium">Best Place For You</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">Book Holiday Bungalows</h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-8">
            Experience the comfort and luxury of our carefully selected holiday bungalows, offering the perfect base for
            your  Sri Lanka adventure.
          </p>

          <a
            href="#"
            className="inline-block bg-[#1ca8cb] hover:bg-[#1795b5] text-white px-8 py-3 rounded-full font-medium transition-colors mb-12"
          >
            Book Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bungalows.map((bungalow, index) => (
            <motion.div
              key={bungalow.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative h-64">
                <Image src={bungalow.image || "/placeholder.svg"} alt={bungalow.name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 truncate">{bungalow.name}</h3>
                <a
                  href={bungalow.link}
                  className="inline-flex items-center text-[#1ca8cb] font-medium hover:text-[#1795b5] transition-colors"
                >
                  View More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
