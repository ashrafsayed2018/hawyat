import { Cairo } from 'next/font/google'

import Form from './Form'
import { SiteInfo } from '@/app/constants'
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})
const ContactForm = () => {
  return (
    <div className="py-20 md:py-40">
      <h3 className={`${cairo.className} text-3xl font-semibold`}>
        نلبي خدماتكم اينما كنتم
      </h3>
      <p className="text-lg mt-4 to-gray-500">نرحب بتواصلكم معنا اليوم</p>
      {/* form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* right */}
        <div className="right">
          <h3 className={`${cairo.className} text-3xl font-semibold`}>
            اترك لنا رسالة
          </h3>
          <p className="text-lg mt-4 to-gray-500">نرحب بتواصلكم</p>
          <h3 className={`${cairo.className} text-3xl font-semibold`}>هاتف </h3>
          <p className="text-lg mt-4 to-gray-500">{SiteInfo.mobile}</p>
          {/* <h3 className={`${cairo.className} text-3xl font-semibold`}>
            بريد الكتروني{' '}
          </h3>
          <p className="text-lg mt-4 to-gray-500">{SiteInfo.email}</p> */}
        </div>
        {/* left */}
        <Form />
      </div>
    </div>
  )
}

export default ContactForm
