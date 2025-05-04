"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SearchBar from "@/components/search-bar"
import Experiences from "@/components/experiences"
import Destinations from "@/components/destinations"
import About from "@/components/about"
import Accommodations from "@/components/accommodations"
import Gallery from "@/components/gallery"
import NewsEvents from "@/components/news-events"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat-bot"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative">
      <Navbar scrolled={scrolled} />
      <Hero />
      <SearchBar />
      <Experiences />
      <Destinations />
      <About />
      <Accommodations />
      <Gallery />
      <NewsEvents />
      <Footer />
      <ChatBot />
    </main>
  )
}
