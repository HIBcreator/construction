"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Metro Business Center",
    description: "A 15-story commercial office building with LEED Gold certification and state-of-the-art facilities.",
    image: "/placeholder.svg?height=600&width=800",
    location: "Downtown Chicago, IL",
    completionDate: "2022",
  },
  {
    id: 2,
    name: "Riverfront Industrial Complex",
    description: "Modern manufacturing facility with integrated logistics center and sustainable design elements.",
    image: "/placeholder.svg?height=600&width=800",
    location: "Pittsburgh, PA",
    completionDate: "2021",
  },
  {
    id: 3,
    name: "Oakridge Community Bridge",
    description: "Award-winning infrastructure project connecting communities with innovative engineering solutions.",
    image: "/placeholder.svg?height=600&width=800",
    location: "Portland, OR",
    completionDate: "2023",
  },
]

export default function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-4 text-center text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful construction and engineering projects
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
                  {projects[currentProject].location}
                </div>
                <h3 className="text-3xl font-bold mb-4">{projects[currentProject].name}</h3>
                <p className="text-xl text-muted-foreground mb-6">{projects[currentProject].description}</p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="text-muted-foreground">Completed: {projects[currentProject].completionDate}</span>
                  </div>
                </div>
                <button className="construction-button">View Project Details</button>
              </div>
              <div className="relative">
                <Image
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].name}
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -left-4 bg-background shadow-lg p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="font-medium">On time & on budget</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background p-2 rounded-full shadow-lg border border-border z-10"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background p-2 rounded-full shadow-lg border border-border z-10"
            onClick={nextProject}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
