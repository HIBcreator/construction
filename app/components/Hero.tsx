"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <svg
          className="absolute left-0 top-0 h-full w-full stroke-gray-200 dark:stroke-gray-600 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <div className="mt-4 flex items-center gap-x-2">
            <div className="flex h-8 items-center justify-center rounded-full bg-accent px-3 text-sm font-semibold text-accent-foreground">
              Industry Leaders
            </div>
            <span className="text-sm font-medium text-muted-foreground">Since 1995</span>
          </div>
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building <span className="text-gradient">Tomorrow's</span> Infrastructure Today
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BuildTech Solutions delivers innovative construction and engineering services for commercial, industrial,
            and infrastructure projects. With over 25 years of experience, we build with precision, safety, and
            sustainability in mind.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#projects" className="construction-button">
              View Our Projects
            </Link>
            <a href="#portfolio" className="construction-button bg-accent text-accent-foreground hover:bg-accent/90">
              Project Portfolio
            </a>
            <Link href="#contact" className="text-sm font-semibold leading-6 text-foreground">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Construction site with modern building"
              width={600}
              height={600}
              className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-accent/90 p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">ISO Certified</p>
                  <p className="text-xs text-white/80">Quality Management</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
