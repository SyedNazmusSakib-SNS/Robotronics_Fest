"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { organizers } from "@/data/organizers"

export function OrganizersSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Organizers
        </motion.h2>

        {/* Head of Organization */}
        <div className="mb-16">
          {organizers
            .filter((org) => org.tier === "head")
            .map((organizer, index) => (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-pink-400 p-1">
                      <img
                        src={organizer.image || "/placeholder.svg"}
                        alt={organizer.name}
                        className="w-full h-full rounded-full object-cover bg-gray-800"
                      />
                    </div>
                    <CardTitle className="text-2xl text-white">{organizer.name}</CardTitle>
                    <CardDescription className="text-cyan-400 text-lg">{organizer.designation}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <div className="text-pink-400 font-semibold text-lg">{organizer.role}</div>
                    <div className="flex items-center justify-center text-gray-300">
                      <Phone className="w-4 h-4 mr-2" />
                      {organizer.phone}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Second Tier */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizers
              .filter((org) => org.tier === "second")
              .map((organizer, index) => (
                <motion.div
                  key={organizer.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-pink-400 p-1">
                        <img
                          src={organizer.image || "/placeholder.svg"}
                          alt={organizer.name}
                          className="w-full h-full rounded-full object-cover bg-gray-800"
                        />
                      </div>
                      <CardTitle className="text-xl text-white">{organizer.name}</CardTitle>
                      <CardDescription className="text-cyan-400">{organizer.designation}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-pink-400 font-semibold">{organizer.role}</div>
                      <div className="flex items-center justify-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2" />
                        {organizer.phone}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Third Tier */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Segment Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizers
              .filter((org) => org.tier === "third")
              .map((organizer, index) => (
                <motion.div
                  key={organizer.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-pink-400 p-1">
                        <img
                          src={organizer.image || "/placeholder.svg"}
                          alt={organizer.name}
                          className="w-full h-full rounded-full object-cover bg-gray-800"
                        />
                      </div>
                      <CardTitle className="text-xl text-white">{organizer.name}</CardTitle>
                      <CardDescription className="text-cyan-400">{organizer.designation}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-pink-400 font-semibold">{organizer.role}</div>
                      <div className="flex items-center justify-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2" />
                        {organizer.phone}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
