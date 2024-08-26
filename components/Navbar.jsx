'use client'
import { NavLinks } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import Call from './Call'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="absolute w-11/12 md:w-[75%] left-1/2 -translate-x-1/2 z-50 top-[30px]">
        {/* large navbar */}
        <div className="nav md:block bg-white h-[90px] p-5 rounded-md shadow-2xl">
          <div className="md:grid md:grid-cols-5 flex items-center justify-between">
            <div className="logo md:first-line:col-span-1">
              <Image
                src="/work/001.jpeg"
                alt="logo"
                width={100}
                height={100}
                priority={true}
                className="w-full md:w-4/5 h-12 object-contain"
              />
            </div>
            <div className="logo hidden md:block md:col-span-3">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {NavLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 max-w-content break-words"
                  >
                    {link.title}{' '}
                  </Link>
                ))}
              </div>
            </div>
            <Call style="hidden col-span-1 md:flex items-center justify-end gap-2 text-gray-600" />
            <div
              className="mobile-menu md:hidden cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <svg
                className="_burger_1vnd5_287"
                width="26px"
                height="19px"
                viewBox="0 0 26 19"
              >
                <g
                  id="Hero-Sections"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    transform="translate(-326.000000, -26.000000)"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <g transform="translate(327.000000, 27.000000)">
                      <path d="M0,0.8 L24,0.8"></path>
                      <path d="M0,8.8 L24,8.8"></path>
                      <path d="M9.6,16.8 L24,16.8"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  )
}

export default Navbar
