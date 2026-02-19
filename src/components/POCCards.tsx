import { motion } from 'framer-motion'
import type { POCType } from '../App'

interface POCCardsProps {
  onSelectPOC: (poc: POCType) => void
}

const pocs = [
  {
    id: 'hospital' as const,
    title: 'Hospital Management',
    description: 'Streamline patient care with integrated scheduling, records, and resource management',
    icon: '🏥',
    color: 'from-emerald-500 to-teal-600',
    features: ['Patient Portal', 'Appointment Scheduling', 'Medical Records', 'Staff Management']
  },
  {
    id: 'fnb' as const,
    title: 'F&B Operations',
    description: 'Optimize restaurant operations with order management, inventory, and analytics',
    icon: '🍽️',
    color: 'from-orange-500 to-red-600',
    features: ['Digital Menu', 'Order Management', 'Inventory Tracking', 'Sales Analytics']
  },
  {
    id: 'retail' as const,
    title: 'Retail Management',
    description: 'Enhance customer experience with POS integration, inventory, and loyalty programs',
    icon: '🛍️',
    color: 'from-blue-500 to-cyan-600',
    features: ['POS System', 'Inventory Control', 'Customer Loyalty', 'Multi-store Support']
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function POCCards({ onSelectPOC }: POCCardsProps) {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {pocs.map((poc) => (
          <motion.div
            key={poc.id}
            variants={item}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectPOC(poc.id)}
            className="cursor-pointer group"
          >
            <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-900/50">
              <div className={`absolute inset-0 bg-gradient-to-br ${poc.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative p-8">
                <div className="text-6xl mb-6">{poc.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{poc.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{poc.description}</p>

                <div className="space-y-2">
                  {poc.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <span className="mr-2 text-cyan-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-semibold">Explore Solution</span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
