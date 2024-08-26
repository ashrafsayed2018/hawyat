import Image from 'next/image'
import Link from 'next/link'
import SocialIcon from './SocialIcon'
import { SocialLinks } from '@/app/constants'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  place-items-center gap-y-6">
      <div className="md:col-span-1 h-32 w-96">
        <Image
          src="/work/001.jpeg"
          alt="logo"
          width={200}
          height={200}
          priority={true}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="md:col-span-2 flex justify-center items-center">
        <ul className="flex gap-6">
          <li>
            <Link href={'/'}>الرئيسية</Link>
          </li>
          <li>
            <Link href={'/about'}>معلومات عنا </Link>
          </li>
          {/* <li>
            <Link href={'/contact'}>اتصل بنا</Link>
          </li> */}
        </ul>
      </div>
      <div className="md:col-span-1">
        <div className="flex gap-2">
          {SocialLinks.map((link) => (
            <SocialIcon key={link.id} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
