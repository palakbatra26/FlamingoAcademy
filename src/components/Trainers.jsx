import { motion } from 'framer-motion'

const trainers = [
  {
    name: 'Sarah Johnson',
    certification: 'IELTS Certified Trainer',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    certification: 'PTE Expert Trainer',
    experience: '6+ Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Emily Davis',
    certification: 'Spoken English Expert',
    experience: '5+ Years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Robert Williams',
    certification: 'Academic Coordinator',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  }
]

export default function Trainers() {
  return (
    <section className="section-padding bg-navy-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Meet Our <span className="gradient-text">Expert Trainers</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Learn from the best in the industry with years of experience in teaching IELTS, PTE, and Spoken English
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-flamingo/30 group-hover:border-flamingo transition-colors">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-flamingo to-royal flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold font-poppins mb-1 group-hover:text-flamingo transition-colors">
                {trainer.name}
              </h3>
              <p className="text-royal-light text-sm mb-2">{trainer.certification}</p>
              <p className="text-slate-400 text-sm">{trainer.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
