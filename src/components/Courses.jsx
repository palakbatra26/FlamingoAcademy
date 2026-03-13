import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const coursesData = [
  {
    id: 1,
    title: 'IELTS Preparation',
    description: 'Comprehensive IELTS coaching with expert trainers and proven methodologies to achieve your target band score.',
    duration: '2-4 Months',
    features: [
      'Expert IELTS Trainers',
      'Mock Tests & Practice',
      'Speaking & Writing Evaluation',
      'Personalized Feedback',
      'Flexible Batch Timing',
      'Online & Offline Classes'
    ],
    highlights: [
      '5+ Years of Experience',
      '95% Success Rate',
      '1000+ IELTS Achievers',
      'Small Batch Size'
    ]
  },
  {
    id: 2,
    title: 'PTE Preparation',
    description: 'Master PTE Academic with our advanced training program and achieve your desired score.',
    duration: '6-8 Weeks',
    features: [
      'AI-powered Practice Tests',
      'Real-time Scoring',
      'Speaking Practice',
      'Listening & Reading Strategies',
      'Writing Templates',
      'Expert Guidance'
    ],
    highlights: [
      'Latest PTE Format',
      'Instant Results',
      'Experienced Trainers',
      'Proven Techniques'
    ]
  },
  {
    id: 3,
    title: 'Spoken English',
    description: 'Transform your English communication skills with our intensive spoken English program.',
    duration: '3-6 Months',
    features: [
      'Native Speaker Training',
      'Conversation Practice',
      'Grammar & Vocabulary',
      'Pronunciation Tips',
      'Group Discussions',
      'Personality Development'
    ],
    highlights: [
      'Confidence Building',
      'Accent Training',
      'Real-world Scenarios',
      'Certificate of Completion'
    ]
  },
  {
    id: 4,
    title: 'Online Classes (6-10)',
    description: 'Comprehensive online education for school students covering all subjects and exam preparation.',
    duration: 'Full Academic Year',
    features: [
      'All Subjects Covered',
      'Live Interactive Classes',
      'Recorded Lectures',
      'Weekly Tests',
      'Study Materials',
      'Parent Portal'
    ],
    highlights: [
      'CBSE & ICSE Aligned',
      'Expert Faculty',
      'Smart Classes',
      'Regular Progress Reports'
    ]
  }
]

function CourseModal({ course, isOpen, onClose }) {
  if (!course) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold font-poppins mb-2">{course.title}</h3>
            <p className="text-slate-400 mb-4">{course.description}</p>
            <p className="text-flamingo font-semibold mb-6">Duration: {course.duration}</p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">What You'll Learn</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-300">
                    <svg className="w-4 h-4 text-flamingo flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Why Choose This Course</h4>
              <div className="flex flex-wrap gap-2">
                {course.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-royal/20 text-royal-light text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-primary flex-1">
                Enroll Now
              </button>
              <button className="btn-secondary flex-1">
                Book Demo Class
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Courses({ showAll = false, showTitle = true }) {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const displayCourses = showAll ? coursesData : coursesData.slice(0, 4)

  const openModal = (course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  return (
    <section className="section-padding bg-navy-light/30">
      <div className="container-custom">
        {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Our <span className="gradient-text">Premium Courses</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose from our range of expert-led courses designed to help you achieve your goals
          </p>
        </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-4 sm:p-6 group cursor-pointer"
              onClick={() => openModal(course)}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-flamingo to-royal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-flamingo transition-colors">
                {course.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>
              <p className="text-flamingo text-sm font-semibold mb-4">
                Duration: {course.duration}
              </p>

              <div className="flex gap-2">
                <button className="btn-primary text-sm py-2 px-4 flex-1">
                  Enroll Now
                </button>
                <button
                  className="btn-secondary text-sm py-2 px-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(course)
                  }}
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
