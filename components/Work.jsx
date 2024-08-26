import { WorkImages } from '@/app/constants'
import Image from 'next/image'
import { Cairo } from 'next/font/google'
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})
const Work = () => {
  return (
    <div className="py-20 md:py-40">
      <h2
        className={`${cairo.className} text-4xl font-bold mb-4 text-red text-center`}
      >
        من اعمالنـا
      </h2>
      <p className="text-md text-center mx-auto mb-14 font-semibold">
        جودتنا عالية واسعارنا ممتازة
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {WorkImages.map((image, index) => (
          <div key={index} className="w-full h-[400px] bg-yellow-700">
            <Image
              src={image}
              alt="service"
              width={500}
              height={500}
              priority={true}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
