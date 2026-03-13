import { useEffect } from 'react'
import ContactComponent from '../components/Contact'
import DemoBooking from '../components/DemoBooking'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us and start your journey today
          </p>
        </div>
      </section>

      <ContactComponent />
      <DemoBooking />
    </div>
  )
}
