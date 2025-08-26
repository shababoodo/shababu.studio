'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ShababooLogo from '@/components/ShababooLogo'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="grid place-items-center min-h-[60vh]">
        <ShababooLogo
          className="w-[600px] h-auto"
          stroke="#111827"
          fill="#4471c1"
          strokeWidth={3}
          duration={2.2}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8, ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ cursor: 'pointer' }}
        >
          <ChevronDown className="w-8 h-8 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}