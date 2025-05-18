"use client"

import { motion } from "framer-motion"
import { Building2, Hammer, HardHat, Ruler, Truck, Wrench } from "lucide-react"

const services = [
  {
    icon: <Building2 className="w-12 h-12 mb-4 text-primary" />,
    title: "Commercial Construction",
    description: "Building state-of-the-art commercial spaces, from office buildings to retail centers.",
  },
  {
    icon: <Hammer className="w-12 h-12 mb-4 text-accent" />,
    title: "Industrial Projects",
    description: "Specialized construction for manufacturing, warehousing, and industrial facilities.",
  },
  {
    icon: <Ruler className="w-12 h-12 mb-4 text-primary" />,
    title: "Architectural Design",
    description: "Comprehensive design services that blend functionality, aesthetics, and sustainability.",
  },
  {
    icon: <Wrench className="w-12 h-12 mb-4 text-accent" />,
    title: "Renovation & Retrofitting",
    description: "Modernizing existing structures while preserving their integrity and character.",
  },
  {
    icon: <HardHat className="w-12 h-12 mb-4 text-primary" />,
    title: "Project Management",
    description: "Expert oversight ensuring projects are completed on time, within budget, and to specification.",
  },
  {
    icon: <Truck className="w-12 h-12 mb-4 text-accent" />,
    title: "Infrastructure Development",
    description: "Building essential infrastructure including roads, bridges, and utility systems.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-4 text-center text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your specific needs and requirements
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-background p-8 rounded-lg shadow-md border border-border hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
