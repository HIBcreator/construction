"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About BuildTech
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-6">Building Excellence Since 1995</h3>
            <p className="text-gray-300 mb-6">
              At BuildTech Solutions, we've established ourselves as industry leaders in construction and engineering
              services. With over 25 years of experience, we've successfully completed projects across commercial,
              industrial, and infrastructure sectors.
            </p>
            <p className="text-gray-300 mb-8">
              Our team of highly skilled professionals is committed to delivering exceptional quality, innovative
              solutions, and sustainable construction practices. We pride ourselves on our attention to detail,
              adherence to safety standards, and ability to complete projects on time and within budget.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-gray-300">Team Members</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
              <Award className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Award-Winning Quality</h4>
                <p className="text-gray-300">
                  Our commitment to excellence has earned us multiple industry awards and certifications, including ISO
                  9001 for quality management systems.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
              <Users className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                <p className="text-gray-300">
                  Our diverse team includes certified engineers, architects, project managers, and skilled tradespeople
                  with specialized expertise across all construction disciplines.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
              <Clock className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">On-Time Delivery</h4>
                <p className="text-gray-300">
                  We understand the importance of timelines in construction. Our proven project management methodology
                  ensures we deliver on schedule without compromising quality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
