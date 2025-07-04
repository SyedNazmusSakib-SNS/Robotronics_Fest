"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Robotics and Mechatronics Engineering | University of Dhaka
          </h3>
        </div>
        <div className="text-gray-400 space-y-1 text-sm md:text-base">
          <p>
            &copy; {new Date().getFullYear()} RMEDU. All rights reserved.
          </p>
          <p>
            Created by{" "}
            <a
              href="mailto:rmedusc@gmail.com"
              className="text-cyan-400 hover:underline transition"
            >
              Syed Nazmus Sakib
            </a>
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="mailto:rmedusc@gmail.com"
            aria-label="Email RMEDU"
            className="inline-flex items-center px-4 py-2 rounded-md text-cyan-400 hover:text-cyan-300 hover:bg-gray-800 transition"
          >
            <Mail className="w-4 h-4 mr-2" />
            rmedu@rme.du.ac.bd
          </a>
        </div>
      </div>
    </footer>
  )
}
