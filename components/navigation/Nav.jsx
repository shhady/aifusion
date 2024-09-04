import React from 'react'
import  Navbar  from './Navbar'
import { FloatingDockDemo } from './Mobile'

export default function Nav() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className='fixed bottom-0 z-50 left-2'>
            <FloatingDockDemo />
        </div>
    </div>
  )
}
