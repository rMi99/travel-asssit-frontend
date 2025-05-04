"use client"

import { useState } from "react"
import { Search, MapPin, Compass, Users } from "lucide-react"

export default function SearchBar() {
  const [city, setCity] = useState("")
  const [destination, setDestination] = useState("")
  const [activity, setActivity] = useState("")

  const cities = [
    "Matara",
    "Weligama",
    "Deniyaya",
    "Dickwella",
    "Hambantota",
    "Tangalle",
    "Tissamaharama",
    "Galle",
    "Hikkaduwa",
    "Ambalangoda",
    "Balapitiya",
    "Koggala",
    "Neluwa",
    "Ambalantota",
    "Mirissa",
    "Devinuwara",
    "Lunugamvehera",
    "Akurala",
    "Pitigala",
    "Unawatuna",
  ]

  const destinations = [
    "Galle Fort",
    "Kosgoda Turtle Hatchery",
    "Balapitiya Madu River",
    "Hikkaduwa Beach",
    "Yala National Park",
    "Mirissa Beach",
    "Weligama Beach",
    "Sinharaja Rain Forest",
    "Hummanaya Blow Hole",
    "Mulkirigala Temple",
  ]

  const activities = [
    "Surfing",
    "Whale Watching",
    "Boat Safari",
    "Snorkeling",
    "Scuba Diving",
    "Wildlife Safari",
    "Stilt Fishing",
    "Beach Relaxation",
    "Camping",
    "Water Sports",
  ]

  return (
    <section className="relative z-30 -mt-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <MapPin className="w-5 h-5 mr-2 text-[#1ca8cb]" />
                City
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ca8cb]"
              >
                <option value="" disabled>
                  Select City
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Compass className="w-5 h-5 mr-2 text-[#1ca8cb]" />
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ca8cb]"
              >
                <option value="" disabled>
                  Select Destination
                </option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Users className="w-5 h-5 mr-2 text-[#1ca8cb]" />
                Things to Do
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ca8cb]"
              >
                <option value="" disabled>
                  Select Activity
                </option>
                {activities.map((act) => (
                  <option key={act} value={act}>
                    {act}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-[#1ca8cb] hover:bg-[#1795b5] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center"
            >
              <Search className="mr-2 h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
