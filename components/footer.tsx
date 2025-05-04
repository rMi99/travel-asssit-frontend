"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://southernsrilanka.lk/build/assets/logo3-DJHSihqR.png"
                alt="Southern Sri Lanka"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              🌴 Discover the Magic of Sri Lanka's Southern Province! Embark on an unforgettable journey to a land of
              hidden treasures, pristine beaches, and vibrant culture!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1ca8cb] flex items-center justify-center hover:bg-[#1795b5] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1ca8cb] flex items-center justify-center hover:bg-[#1795b5] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1ca8cb] flex items-center justify-center hover:bg-[#1795b5] transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1ca8cb] flex items-center justify-center hover:bg-[#1795b5] transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#1ca8cb] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-[#1ca8cb] transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-gray-400 hover:text-[#1ca8cb] transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#1ca8cb] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#1ca8cb] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-[#1ca8cb] transition-colors">
                  News & Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Other Sites</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://sltda.gov.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1ca8cb] transition-colors"
                >
                  Sri Lanka Tourism Development Authority
                </a>
              </li>
              <li>
                <a
                  href="https://meetinsrilanka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1ca8cb] transition-colors"
                >
                  Sri Lanka Convention Bureau
                </a>
              </li>
              <li>
                <a
                  href="https://slithm.edu.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1ca8cb] transition-colors"
                >
                  Sri Lanka Institute of Tourism & Hotel Management
                </a>
              </li>
              <li>
                <a
                  href="https://srilanka.travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1ca8cb] transition-colors"
                >
                  Sri Lanka Tourism Promotion Bureau
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#1ca8cb] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">No.153 "B", S.H.Dahanayaka Mawatha, Galle</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#1ca8cb] mr-3 flex-shrink-0" />
                <a href="tel:+94912224072" className="text-gray-400 hover:text-[#1ca8cb] transition-colors">
                  +94 91 222 4072
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#1ca8cb] mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@southernsrilanka.lk"
                  className="text-gray-400 hover:text-[#1ca8cb] transition-colors"
                >
                  info@southernsrilanka.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 py-8 text-center">
          <p className="text-gray-400">
            Copyright &copy; {new Date().getFullYear()} | Southern Sri Lanka - Ruhunu Tourist Bureau
          </p>
        </div>
      </div>
    </footer>
  )
}
