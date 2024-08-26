import { Tajawal } from 'next/font/google'
import './globals.css'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { SiteInfo } from './constants'

const tajawal = Tajawal({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})

export const metadata = {
  title: SiteInfo.title,
  description: SiteInfo.description,
  icons: {
    icon: '/work/001.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        <Hero />
        <div className="min-h-screen">{children}</div>
        <div className="w-full md:w-[72%] p-4 mx-auto py-20">
          <Footer />
        </div>
      </body>
    </html>
  )
}
