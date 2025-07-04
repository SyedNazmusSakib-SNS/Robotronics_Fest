"use client"

import { motion } from "framer-motion"

export function SponsorsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Sponsors
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((sponsor, index) => (
            <motion.div
              key={sponsor}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-gray-800 font-bold text-lg">Sponsor {sponsor}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
