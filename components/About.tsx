'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">About</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-slate-600 leading-relaxed">
            We believe in the power of thoughtful design and innovative technology to transform businesses. 
            Our mission is to create digital experiences that not only look beautiful but drive real results 
            for our clients. Every project is an opportunity to push boundaries and exceed expectations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}