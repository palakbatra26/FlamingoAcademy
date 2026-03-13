import { Suspense, lazy } from 'react'
import LeadCapture from '../components/LeadCapture'
import Courses from '../components/Courses'
import OnlineClasses from '../components/OnlineClasses'
import WhyChooseUs from '../components/WhyChooseUs'
import Trainers from '../components/Trainers'

const Hero = lazy(() => import('../components/Hero'))
const Stats = lazy(() => import('../components/Stats'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const DemoBooking = lazy(() => import('../components/DemoBooking'))

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="container-custom py-24">Loading...</div>}>
        <Hero />
      </Suspense>
      <LeadCapture />
      <Courses showTitle={false} />
      <OnlineClasses />
      <Suspense fallback={<div className="container-custom py-16">Loading...</div>}>
        <Stats />
      </Suspense>
      <WhyChooseUs />
      <Trainers />
      <Suspense fallback={<div className="container-custom py-16">Loading...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="container-custom py-16">Loading...</div>}>
        <DemoBooking />
      </Suspense>
    </>
  )
}
