import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Solutions Showcase
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Explore innovative proof-of-concept applications
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Modern solutions for healthcare, dining, and retail industries
        </motion.p>
      </motion.div>
    </section>
  )
}
