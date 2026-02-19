import { motion } from 'framer-motion'
import type { POCType } from '../App'

interface POCCardsProps {
  onSelectPOC: (poc: POCType) => void
}

const pocs = [
  {
    id: 'hospital' as const,
    title: 'Healthcare',
    description: 'Patient management and medical operations',
    accent: 'bg-green-500/10',
    features: ['Patient Records', 'Scheduling', 'Analytics', 'Integration']
  },
  {
    id: 'fnb' as const,
    title: 'Dining Services',
    description: 'Restaurant and food operations platform',
    accent: 'bg-amber-500/10',
    features: ['Ordering', 'Inventory', 'Analytics', 'Staff Tools']
  },
  {
    id: 'retail' as const,
    title: 'Retail',
    description: 'Complete point-of-sale and store management',
    accent: 'bg-blue-500/10',
    features: ['POS System', 'Inventory', 'Analytics', 'Multi-store']
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function POCCards({ onSelectPOC }: POCCardsProps) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {pocs.map((poc) => (
          <motion.div
            key={poc.id}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectPOC(poc.id)}
            className="cursor-pointer group"
          >
            <div className="glass rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg">
              <div className={`w-12 h-12 rounded-full ${poc.accent} mb-6`} />

              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">{poc.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">{poc.description}</p>

              <div className="space-y-2 mb-6">
                {poc.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2.5" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors text-sm font-medium">
                <span>Explore</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
