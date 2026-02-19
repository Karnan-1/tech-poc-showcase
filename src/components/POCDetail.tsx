import { motion } from 'framer-motion'
import type { POCType } from '../App'

interface POCDetailProps {
  poc: POCType
  onBack: () => void
}

const pocDetails = {
  hospital: {
    title: 'Healthcare Platform',
    description: 'Comprehensive patient management and medical operations system for hospitals and clinics.',
    features: [
      { title: 'Patient Records', description: 'Secure digital health records with compliance' },
      { title: 'Scheduling', description: 'Appointment management with automated reminders' },
      { title: 'Staff Rostering', description: 'Shift planning and resource allocation' },
      { title: 'Pharmacy Integration', description: 'Prescription and medication tracking' },
      { title: 'Billing', description: 'Insurance and patient billing management' },
      { title: 'Analytics', description: 'Real-time hospital operations insights' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'HL7', 'AWS', 'Redis']
  },
  fnb: {
    title: 'Dining Operations Platform',
    description: 'All-in-one solution for restaurants to manage orders, inventory, and staff efficiently.',
    features: [
      { title: 'Menu Management', description: 'Digital menu with real-time updates' },
      { title: 'Order Processing', description: 'Multi-channel order management system' },
      { title: 'Inventory', description: 'Real-time stock tracking and reordering' },
      { title: 'Kitchen Display', description: 'Digital order management for staff' },
      { title: 'Analytics', description: 'Sales trends and revenue forecasting' },
      { title: 'Reservations', description: 'Table booking and waitlist management' }
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'Socket.io', 'Docker']
  },
  retail: {
    title: 'Retail Management Suite',
    description: 'Modern platform connecting online and offline channels with omnichannel inventory management.',
    features: [
      { title: 'POS System', description: 'Fast checkout with payment processing' },
      { title: 'Inventory', description: 'Multi-location stock management' },
      { title: 'Loyalty Program', description: 'Points and rewards system' },
      { title: 'Multi-store', description: 'Centralized management dashboard' },
      { title: 'E-commerce', description: 'Unified online and offline orders' },
      { title: 'Staff Tools', description: 'Scheduling and sales tracking' }
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'Stripe']
  }
}

export default function POCDetail({ poc, onBack }: POCDetailProps) {
  if (!poc) return null

  const details = pocDetails[poc]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="px-6 py-8 max-w-5xl mx-auto">
        <motion.button
          onClick={onBack}
          className="mb-8 flex items-center text-gray-700 hover:text-gray-900 transition-colors group text-sm"
          whileHover={{ x: -4 }}
        >
          <span className="mr-2">←</span>
          Back
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3"
            >
              {details.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 mb-12"
            >
              {details.description}
            </motion.p>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className="glass-subtle rounded-2xl p-5 group hover:shadow-md transition-all"
                  >
                    <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    className="glass-subtle px-3.5 py-1.5 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
