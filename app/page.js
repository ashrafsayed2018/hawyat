import Advantage from '@/components/Advantage'
import ContactForm from '@/components/ContactForm'
import Experience from '@/components/Experience'
import Map from '@/components/Map'
import Testimonial from '@/components/Testimonial'
import Work from '@/components/Work'

export default function Home() {
  return (
    <>
      <div className="w-full md:w-[72%] mx-auto px-5 md:px-0">
        <Advantage />
      </div>
      <div className="w-full md:w-[72%] mx-auto px-5 md:px-0">
        <Work />
      </div>

      <div className="w-full md:w-[72%] mx-auto px-5 md:px-0">
        <Experience />
      </div>
      <Testimonial />
      <div className="w-full md:w-[72%] mx-auto px-5 md:px-0">
        <h2 className="text-center text-2xl font-bold text-red my-8">
          موقعنا على الخريطة
        </h2>
        <Map />
      </div>
    </>
  )
}
