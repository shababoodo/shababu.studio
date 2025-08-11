'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center px-6">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900">
            {"Shababu".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: i < 4 ? -50 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: i * 0.1, 
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Crafting exceptional experiences through innovative solutions
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}