'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function ProductDetails() {
  const details = [
    "High-performance processor",
    "Stunning 4K display",
    "All-day battery life",
    "Advanced AI capabilities"
  ]

  return (
    <section className="py-24 px-6 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Product Details
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-purple-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle className="text-green-500 mr-4 h-8 w-8" />
              </motion.div>
              <span className="text-lg text-purple-800 font-semibold">{detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

