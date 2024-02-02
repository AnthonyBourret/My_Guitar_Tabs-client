import React from 'react'
import NavBarMobile from './NavBarMobile'
import NavBarDesktop from './NavBarDesktop'

function Header() {
  return (
    <div className='flex bg-neutral w-full sm:h-48 sm:pl-2 sm:border-b-4 sm:border-base-100'>
      <NavBarMobile />
      <NavBarDesktop />
    </div>
  )
}

export default Header