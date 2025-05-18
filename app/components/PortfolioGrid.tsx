"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Corporate Headquarters",
    description: "Modern 12-story office building with sustainable design features",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
  },
  {
    id: 2,
    title: "Manufacturing Facility",
    description: "State-of-the-art production plant with advanced automation systems",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Industrial",
  },
  {
    id: 3,
    title: "Highway Expansion",
    description: "Major infrastructure project expanding 15 miles of interstate highway",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
  },
  {
    id: 4,
    title: "Medical Center",
    description: "Cutting-edge healthcare facility with specialized treatment units",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Healthcare",
  },
  {
    id: 5,
    title: "Retail Complex",
    description: "Mixed-use development featuring retail, dining, and entertainment spaces",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Residential Tower",
    description: "Luxury high-rise apartment building with premium amenities",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Residential",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Project Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our diverse range of construction and engineering projects
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors m-1 ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-border hover:border-primary/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a href="#" className="text-primary hover:underline inline-flex items-center">
                    View Details
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
