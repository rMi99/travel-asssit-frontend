import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: " Sri Lanka Travel - With Assist",
  description:
    "Discover the beauty of  Sri Lanka Travel with With Assist. Explore pristine beaches, vibrant wildlife, historic landmarks, and authentic local culture in the heart of the Ruhuna region. Plan your perfect getaway today!"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
