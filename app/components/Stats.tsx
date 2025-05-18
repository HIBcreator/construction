"use client"

import { motion } from "framer-motion"
import { Building, HardHat, Award, Users } from "lucide-react"

const stats = [
  {
    icon: <Building className="h-8 w-8 text-accent" />,
    value: "500+",
    label: "Projects Completed",
    description: "Across commercial, industrial, and infrastructure sectors",
  },
  {
    icon: <HardHat className="h-8 w-8 text-accent" />,
    value: "25+",
    label: "Years Experience",
    description: "Delivering quality construction solutions since 1995",
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    value: "15+",
    label: "Industry Awards",
    description: "Recognized for excellence in construction and safety",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    value: "150+",
    label: "Team Members",
    description: "Skilled professionals dedicated to your project's success",
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">BuildTech by the Numbers</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">Our track record of success speaks for itself</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 rounded-lg p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 text-accent">{stat.value}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
