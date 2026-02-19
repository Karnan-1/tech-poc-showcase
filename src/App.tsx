import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import POCCards from './components/POCCards'
import POCDetail from './components/POCDetail'

export type POCType = 'hospital' | 'fnb' | 'retail' | null

function App() {
  const [selectedPOC, setSelectedPOC] = useState<POCType>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <AnimatePresence mode="wait">
        {!selectedPOC ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <POCCards onSelectPOC={setSelectedPOC} />
          </motion.div>
        ) : (
          <POCDetail poc={selectedPOC} onBack={() => setSelectedPOC(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
