import ContactForm from '@/components/ContactForm'
import Map from '@/components/Map'
import { Cairo } from 'next/font/google'
import Image from 'next/image'
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})
const AboutPage = () => {
  return (
    <div className="w-full max-w-[95%] mx-auto py-20">
      <h2 className={`${cairo.className} text-3xl font-bold mb-5 text-center`}>
        معلومات عنا
      </h2>
      <p className="text-xl text-center mb-5">نهتم بجودة عملك</p>
      {/* upper */}
      <div className="w-full md:relative  mb-40 md:mb-80 flex flex-col-reverse gap-8">
        <div className="h-96 w-full md:w-[60%] bg-black rounded-xl overflow-hidden">
          <Image
            src="/work/014.jpeg"
            alt="about"
            width={500}
            height={500}
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white p-8 rounded-xl w:full md:w-1/2 relative md:absolute md:-bottom-20 md:left-10 shadow-xl">
          <h3 className={`text-2xl font-bold mb-4 ${cairo.className}`}>
            من نحن
          </h3>
          <p className="leading-8 px-2 py-8 md:p-8">
            شركتنا متخصصة في تقديم حاويات الأنقاض ومخلفات البناء في جميع أنحاء
            جدة، بمقاسات 20 و30 ياردة لتلبية كافة احتياجات الأفراد والمؤسسات
            والشركات والمصانع والمقاولين. نحن نعمل على مدار الساعة ونلتزم بأعلى
            معايير الجودة والخدمة. شركتنا مؤهلة من قبل الأمانة في جميع أنحاء
            جدة، ونوفر عقود حاويات لضمان الراحة والمرونة لعملائنا.
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-20 md:h-96 h-auto overflow-hidden rounded-xl">
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-4 ${cairo.className}`}>
            نحن صادقون مع أنفسنا ، ونلتزم دائمًا بتقديم أفضل الخدمات
          </h3>
          <p className="text-lg my-8">
            حرصا على المصداقية نهتم بالتحسين الدائم المستمر والمحافظة على تميزنا
            فى تقديم جودة عالية
          </p>
        </div>
        <div className="w-full flex-1 rounded-xl overflow-hidden">
          <Image
            src="/work/015.jpeg"
            alt="about"
            width={500}
            height={500}
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="my-16">
        <ContactForm />
      </div>
      <Map />
    </div>
  )
}

export default AboutPage
