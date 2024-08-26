import { Cairo, Tajawal } from 'next/font/google'
import Button from './Button'
import TestimonialCard from './TestimonialCard'
import { SiteInfo } from '@/app/constants'
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})

const tajawal = Tajawal({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})
const Testimonial = () => {
  return (
    <div className="w-full bg-green py-20 md:py-40">
      <div className="w-full md:w-[72%] p-4 mx-auto">
        {/* top */}
        <div>
          <h3 className={`${cairo.className} text-2xl font-bold text-white`}>
            متوفر حاويات انقاض ومخلفات البناء في جميع انحاء جدة
          </h3>

          <p className="text-md text-white mx-auto my-4 font-semibold">
            لتلبي كافه احتياجات الافراد والمؤسسات والشركات والمصانع والمقاولين
          </p>
          <Button
            text="اتصل بنا"
            link={`tel:${SiteInfo.mobile}`}
            style="btn bg-white border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
          />
        </div>
        {/* what clients say */}
        <div className="mt-24">
          <h3 className={`${cairo.className} text-2xl  text-white`}>
            ماذا يقول عملاؤنا
          </h3>

          <p className={`${tajawal.className} text-lg text-white mt-2`}>
            يعتمد مئات العملاء على خدماتنا. انظر ماذا لديهم لقوله.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
            <TestimonialCard
              name="خالد بن فيصل"
              job="مقاول"
              text="حاوياتهم مريحة جداً في العمل، والتوصيل دائمًا في الوقت المحدد."
            />
            <TestimonialCard
              name="أميرة عبدالعزيز"
              job="مديرة مصنع"
              text="خدمتهم ممتازة جدًا، وما يقصرون في تلبية احتياجاتنا."
            />
            <TestimonialCard
              name="أبو عبدالله"
              job="صاحب شركة"
              text="الشركة موثوقة وسريعة في الاستجابة، يستحقون كل التقدير."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
