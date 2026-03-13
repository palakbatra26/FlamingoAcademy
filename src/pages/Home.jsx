import Hero from '../components/Hero'
import LeadCapture from '../components/LeadCapture'
import Courses from '../components/Courses'
import OnlineClasses from '../components/OnlineClasses'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import Trainers from '../components/Trainers'
import Testimonials from '../components/Testimonials'
import DemoBooking from '../components/DemoBooking'

export default function Home() {
  return (
    <>
      <Hero />
      <LeadCapture />
      <Courses showTitle={false} />
      <OnlineClasses />
      <Stats />
      <WhyChooseUs />
      <Trainers />
      <Testimonials />
      <DemoBooking />
    </>
  )
}
