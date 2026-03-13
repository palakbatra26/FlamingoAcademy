import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const statsData = [
  { value: 5000, suffix: '+', label: 'Students Trained' },
  { value: 95, suffix: '%', label: 'Visa Success Rate' },
  { value: 8, suffix: '+', label: 'Years Teaching Experience' },
  { value: 1000, suffix: '+', label: 'IELTS Achievers' }
]

function Counter({ value, suffix, label, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-poppins text-flamingo mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-400">{label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-navy-light/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-flamingo/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-royal/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Our <span className="gradient-text">Success Story</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dreams with Flamingo Academy
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6"
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                inView={isInView}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
