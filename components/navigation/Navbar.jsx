'use client'

import { useState, useEffect, useRef } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <header className="bg-[#131313] fixed top-0 w-full z-50" dir="ltr">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">AIFusion</span>
            <img alt="" src="/logo.jpeg" className="h-16 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-gray-200 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            
          <a href="#" className="text-sm font-semibold leading-6 hover:text-gray-400">צור קשר</a>
          <a href="#" className="text-sm font-semibold leading-6 hover:text-gray-400">בינה מלאכותית</a>
          <a href="#" className="text-sm font-semibold leading-6 hover:text-gray-400"> בניית אתרים  </a>
         
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative w-full max-w-xs p-6 bg-[#131313] h-screen" dir='rtl'>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <nav className="mt-6 ">
              <a href="#" className="block py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500">
                בניית אתרים
              </a>
              <a href="#" className="block py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500">
                בינה מלאכותית
              </a>
              <a href="#" className="block py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500">
                צור קשר
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
