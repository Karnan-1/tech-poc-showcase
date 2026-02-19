import { motion } from 'framer-motion'
import type { POCType } from '../App'

interface POCDetailProps {
  poc: POCType
  onBack: () => void
}

const pocDetails = {
  hospital: {
    title: 'Hospital Management System',
    icon: '🏥',
    color: 'from-emerald-500 to-teal-600',
    description: 'A comprehensive healthcare management platform designed to streamline hospital operations, improve patient care, and optimize resource allocation.',
    features: [
      {
        title: 'Patient Portal',
        description: 'Secure access for patients to view records, book appointments, and communicate with healthcare providers'
      },
      {
        title: 'Appointment Scheduling',
        description: 'Intelligent scheduling system with automated reminders and conflict resolution'
      },
      {
        title: 'Electronic Medical Records',
        description: 'Digital patient records with quick access, audit trails, and HIPAA compliance'
      },
      {
        title: 'Staff Management',
        description: 'Efficient rostering, shift management, and resource allocation tools'
      },
      {
        title: 'Pharmacy Integration',
        description: 'Seamless prescription management and medication tracking'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Real-time insights into hospital operations, patient outcomes, and resource utilization'
      }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'HL7 FHIR', 'AWS', 'Redis']
  },
  fnb: {
    title: 'F&B Management Platform',
    icon: '🍽️',
    color: 'from-orange-500 to-red-600',
    description: 'An all-in-one solution for restaurants and food service businesses to manage orders, inventory, staff, and customer relationships efficiently.',
    features: [
      {
        title: 'Digital Menu Management',
        description: 'Dynamic menu creation with real-time updates, photos, and allergen information'
      },
      {
        title: 'Order Management',
        description: 'Streamlined order processing from dine-in, takeaway, and delivery channels'
      },
      {
        title: 'Inventory Tracking',
        description: 'Real-time inventory monitoring with automated reordering and waste tracking'
      },
      {
        title: 'Kitchen Display System',
        description: 'Digital order management for kitchen staff with preparation time tracking'
      },
      {
        title: 'Sales Analytics',
        description: 'Comprehensive reporting on sales trends, popular items, and revenue forecasting'
      },
      {
        title: 'Table Management',
        description: 'Reservation system with table allocation and waitlist management'
      }
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'Socket.io', 'Docker']
  },
  retail: {
    title: 'Retail Management Suite',
    icon: '🛍️',
    color: 'from-blue-500 to-cyan-600',
    description: 'A modern retail platform that connects online and offline channels, manages inventory across locations, and creates personalized customer experiences.',
    features: [
      {
        title: 'Point of Sale',
        description: 'Fast, intuitive POS system with payment processing and receipt generation'
      },
      {
        title: 'Inventory Control',
        description: 'Multi-location inventory management with automated stock transfers'
      },
      {
        title: 'Customer Loyalty Program',
        description: 'Points-based rewards system with personalized offers and campaigns'
      },
      {
        title: 'Multi-store Support',
        description: 'Centralized management for multiple retail locations with individual analytics'
      },
      {
        title: 'E-commerce Integration',
        description: 'Unified inventory and order management across physical and online stores'
      },
      {
        title: 'Employee Management',
        description: 'Staff scheduling, sales tracking, and commission calculation'
      }
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
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <motion.button
          onClick={onBack}
          className="mb-8 flex items-center text-slate-300 hover:text-white transition-colors group"
          whileHover={{ x: -5 }}
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          Back to Overview
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden"
        >
          <div className={`relative h-48 bg-gradient-to-br ${details.color} flex items-center justify-center`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative text-8xl">{details.icon}</div>
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{details.title}</h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">{details.description}</p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {details.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {details.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
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
