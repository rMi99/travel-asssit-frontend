"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function Experiences() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const experiences = [
    {
      id: 1,
      name: "Whale Watching",
      image: "build/assets/category_1_1-bmalWceS.jpg",
      description: "Witness magnificent blue whales and playful dolphins in their natural habitat.",
    },
    {
      id: 2,
      name: "Surfing",
      image: "build/assets/category_1_2-Cxso67xh.jpg",
      description: "Catch perfect waves at some of Sri Lanka's best surfing spots.",
    },
    {
      id: 3,
      name: "Snorkeling",
      image: "build/assets/category_1_3-DvBI5UDP.jpg",
      description: "Explore vibrant coral reefs and colorful marine life.",
    },
    {
      id: 4,
      name: "Wildlife Safaris",
      image: "build/assets/category_1_4-B-nAGgWe.jpg",
      description: "Encounter elephants, leopards, and exotic birds in their natural habitat.",
    },
    {
      id: 5,
      name: "Scuba Diving",
      image: "build/assets/category_1_5-DDWva0Wn.jpg",
      description: "Dive into the underwater world of shipwrecks and marine biodiversity.",
    },
    {
      id: 6,
      name: "Fish Therapy",
      image: "build/assets/category_1_6-dJVxTf4e.jpg",
      description: "Experience the unique natural spa treatment with tiny fish.",
    },
    {
      id: 7,
      name: "Water Sports",
      image: "build/assets/category_1_7-BzQ3jucA.jpg",
      description: "Enjoy thrilling water activities from jet skiing to paddleboarding.",
    },
    {
      id: 8,
      name: "Boat Safari",
      image: "build/assets/category_1_8-DI7aaGYl.jpg",
      description: "Cruise through mangroves and spot wildlife along scenic rivers.",
    },
    {
      id: 9,
      name: "Camping",
      image: "build/assets/category_1_9-BUZ0w489.jpg",
      description: "Experience the wilderness with comfortable camping facilities.",
    },
    {
      id: 10,
      name: "Beach Relaxation",
      image: "build/assets/category_1_10-DFK_F3fQ.jpg",
      description: "Unwind on pristine beaches with golden sands and clear waters.",
    },
  ]

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#1ca8cb] font-medium">Things To Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Unmissable Experiences in Southern Province</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            From thrilling adventures to serene moments, discover the best activities Southern Sri Lanka has to offer.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors md:-left-5"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-[#1ca8cb]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory gap-6"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[280px] snap-center"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2">{experience.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{experience.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-[#1ca8cb] font-medium hover:text-[#1795b5] transition-colors mt-auto"
                    >
                      See More
                      <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors md:-right-5"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-[#1ca8cb]" />
          </button>
        </div>
      </div>
    </section>
  )
}
