"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { id: 1, src: "build/assets/gallery_1_1-CjmIc0wF.jpg", alt: "Sambur deer" },
    { id: 2, src: "build/assets/gallery_1_2-F67AEYlP.jpg", alt: "Beach sunset" },
    { id: 3, src: "build/assets/gallery_1_3-lt8hIPRV.jpg", alt: "Coastal view" },
    { id: 4, src: "build/assets/gallery_1_4-BXAiZie1.jpg", alt: "Hummanaya" },
    { id: 5, src: "build/assets/gallery_1_5-DT1Bs6Qw.jpg", alt: "Temple view" },
    { id: 6, src: "build/assets/gallery_1_6-jTzhHjfG.jpg", alt: "Wildlife" },
    { id: 7, src: "build/assets/gallery_1_7-BdUeHkLF.jpg", alt: "Beach scene" },
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1ca8cb] font-medium">Make Your Tour More Pleasure</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Recent Gallery</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore stunning visuals of Southern Sri Lanka's most picturesque locations and memorable experiences.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
              onClick={() => setSelectedImage(1)}
            >
              <Image
                src={images[0].src || "/placeholder.svg"}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm">Click to enlarge</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-80"
              onClick={() => setSelectedImage(2)}
            >
              <Image
                src={images[1].src || "/placeholder.svg"}
                alt={images[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm">Click to enlarge</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-80"
              onClick={() => setSelectedImage(3)}
            >
              <Image
                src={images[2].src || "/placeholder.svg"}
                alt={images[2].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm">Click to enlarge</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
              onClick={() => setSelectedImage(4)}
            >
              <Image
                src={images[3].src || "/placeholder.svg"}
                alt={images[3].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm">Click to enlarge</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
              onClick={() => setSelectedImage(5)}
            >
              <Image
                src={images[4].src || "/placeholder.svg"}
                alt={images[4].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm">Click to enlarge</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-80"
              onClick={() => setSelectedImage(6)}
            >
              <Image
                src={images[5].src || "/placeholder.svg"}
                alt={images[5].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm">Click to enlarge</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-full"
              onClick={() => setSelectedImage(7)}
            >
              <Image
                src={images[6].src || "/placeholder.svg"}
                alt={images[6].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm">Click to enlarge</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative max-w-4xl max-h-[80vh]">
              <Image
                src={images.find((img) => img.id === selectedImage)?.src || ""}
                alt={images.find((img) => img.id === selectedImage)?.alt || ""}
                width={800}
                height={600}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
