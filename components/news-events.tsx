"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Calendar } from "lucide-react"

export default function NewsEvents() {
  const events = [
    {
      id: 1,
      title: "World Dance Day Celebration - 2025",
      date: "April 28, 2025",
      image: "https://rtb.sgp1.cdn.digitaloceanspaces.com/media/qTmppaphSaaMQqKLdzg3wXvMupvlpCHN8i1tz8xi.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "RUHUNU BAKMAHE AWURUDDA - 2025",
      date: "April 23, 2025",
      image: "https://rtb.sgp1.cdn.digitaloceanspaces.com/media/EopX3EHzNJU3RMlgfE904k0f58YXc4h8YBavlKo9.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Selected Tourist Area Guide Candidates - 2025",
      date: "February 27, 2025",
      image: "https://rtb.sgp1.cdn.digitaloceanspaces.com/media/KxDtENaSu63o8LmmMB2WZ7XsuUnxUZkp4smnTlMJ.jpg",
      link: "#",
    },
  ]

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <span className="text-[#1ca8cb] font-medium">Stay Updated</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">News & Events</h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center text-[#1ca8cb] font-medium hover:text-[#1795b5] transition-colors"
          >
            See All
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 line-clamp-2">{event.title}</h3>
                <a
                  href={event.link}
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
