'use client'
import Link from 'next/link'
import { Cairo } from 'next/font/google'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { NavLinks } from './constants'
import Image from 'next/image'
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})
export default function NotFound() {
  const params = usePathname()
  const decodedParams = decodeURI(params).split('/')[1].replace('-', ' ')

  if (decodedParams === 'ذبائح للبيع') {
  }
  return (
    <div className="w-full md:w-[72%] p-4 mx-auto text-center">
      <h3 className={`${cairo.className} text-3xl font-semibold`}>
        نلبي خدماتكم اينما كنتم
      </h3>
      <p className="text-3xl font-bold mt-4 to-gray-500 mb-6">
        {decodedParams}
      </p>
      {decodedParams === 'ذبائح للبيع' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto w-full">
          {NavLinks[3].images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="image"
              width={100}
              height={100}
              priority={true}
              className="w-full h-full object-cover rounded-md"
            />
          ))}
        </div>
      )}
      <Link href="/" className="text-blue-500 text-center">
        الرئيسية
      </Link>
    </div>
  )
}
