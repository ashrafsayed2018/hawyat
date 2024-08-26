'use client'
import { NavLinks } from '@/app/constants'
import Link from 'next/link'
import Call from './Call'
import { useEffect } from 'react'

const MobileMenu = ({ open, setOpen }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false)
      }
    }

    const handleResize = () => {
      if (open && window.innerWidth > 672) {
        setOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [open, setOpen])
  return (
    <div
      className={`fixed left-0 top-0 right-0 bottom-0 bg-white h-screen w-full z-50 transition-all duration-300 ${
        open ? 'block' : 'w-0 -right-10 hidden'
      }`}
    >
      <div className="flex flex-col h-full justify-start items-right gap-4 mt-3">
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-gray-600 hover:text-gray-800 max-w-content break-words p-2 border-b-[1px] border-gray-300"
          >
            {' '}
            {link.title}{' '}
          </Link>
        ))}
        <Call style="fixed bottom-8 right-6 flex items-center justify-end gap-2 text-gray-600" />
      </div>

      <span
        className="font-bold cursor-pointer hover:text-red-600 absolute top-3 left-4 z-50"
        onClick={() => setOpen(false)}
      >
        &#10005;
      </span>
    </div>
  )
}

export default MobileMenu
