import { Cairo } from 'next/font/google'
import Button from './Button'
import SocialIcon from './SocialIcon'

import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { SiteInfo, SocialLinks } from '@/app/constants'

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})

const HeroDescription = () => {
  return (
    <div className="absolute bottom-40 md:bottom-24 z-40 h-80 w-11/12 md:w-1/2 text-white right-4 md:right-52">
      <h1
        className={`text-3xl md:text-4xl font-bold text-right mb-4 leading-loose ${cairo.className}`}
      >
        <span className="text-gray-100 text-4xl">حاويات مدى التميز</span>
        <br />
        <span className="text-gray-100 text-xl"> متوفر حاويات انقاض</span>
        <span className="text-red-600 text-xl">
          {' '}
          ومخلفات البناء في جميع انحاء جدة
        </span>
      </h1>
      <p className="font-bold">بمقاس 20 و30 يارده</p>
      <p
        className="font-bold"
        style={{
          color: 'rgb(241, 196, 15)',
        }}
      >
        لتلبي كافه احتياجات الافراد والمؤسسات والشركات والمصانع والمقاولين
      </p>
      <p className="font-bold">- أوقات العمل : على مدار اليوم</p>
      <p className="font-bold">
        - نحن شركه مؤهله من قبل الامانه في جميع انحاء جدة
      </p>
      <p className="font-bold">- يوجد لدينا عقود حاويات</p>
      <p className="font-bold">- نرحب بتواصلكم عبر الهاتف او الواتساب...</p>
      <p className="font-bold"> - نسعي لنيل ثقتكم</p>

      <p className="font-bold">- للحجز والاستفسار / {SiteInfo.mobile}</p>
      <div className="flex gap-2 items-center my-8">
        <Button
          style="btn bg-green-500 text-white hover:bg-green-600"
          link={`https://wa.me/${SiteInfo.whatsapp}`}
          text="واتساب"
        />
        <Button
          style="btn bg-white border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
          link={`tel:${SiteInfo.mobile}`}
          text="اتصال بنا"
        />
      </div>
      <div className="flex gap-2 mt-10  justify-end">
        {SocialLinks.map((link) => (
          <SocialIcon key={link.id} link={link} />
        ))}
      </div>
    </div>
  )
}

export default HeroDescription
