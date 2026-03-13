import { useState } from 'react'
import { motion } from 'framer-motion'

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Prepare for Express API integration
    // const response = await fetch('/api/demo', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you! Our team will contact you shortly.')
      setFormData({ name: '', phone: '', course: '' })
    }, 1000)
  }

  const courses = [
    { value: 'ielts', label: 'IELTS Preparation' },
    { value: 'pte', label: 'PTE Preparation' },
    { value: 'spoken-english', label: 'Spoken English' },
    { value: 'online-classes', label: 'Online Classes (Grades 6-10)' },
  ]

  return (
    <section className="relative py-16 -mt-20 z-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 relative overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-flamingo/20 via-royal/20 to-flamingo/20 opacity-50" />
          <div className="absolute inset-0 rounded-2xl border border-white/10" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-2">
                Get Your <span className="text-flamingo">Free Demo</span> Class
              </h2>
              <p className="text-slate-400">
                Fill the form below and our experts will contact you shortly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:border-flamingo/50 transition-colors"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:border-flamingo/50 transition-colors"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-flamingo/50 transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="" className="bg-navy">Select Course</option>
                    {courses.map((course) => (
                      <option key={course.value} value={course.value} className="bg-navy">
                        {course.label}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto mt-4 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Demo'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
