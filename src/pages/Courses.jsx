import { useEffect } from 'react'
import CoursesComponent from '../components/Courses'
import OnlineClasses from '../components/OnlineClasses'
import Stats from '../components/Stats'
import DemoBooking from '../components/DemoBooking'

export default function Courses() {
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
            Our <span className="gradient-text">Premium Courses</span>
          </h1>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Choose from our comprehensive range of courses designed to help you achieve your language proficiency goals
          </p>
        </div>
      </section>

      <CoursesComponent showAll={true} showTitle={false} />
      <OnlineClasses />
      <Stats />
      <DemoBooking />
    </div>
  )
}
