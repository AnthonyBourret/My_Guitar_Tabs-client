import React from 'react'
import NavBarMobile from './NavBarMobile'
import NavBarDesktop from './NavBarDesktop'

function Header() {
  return (
    <div className='flex bg-neutral w-full sm:h-54 sm:pl-2'>
      {/* The NavBarDesktop component is hidden when the width of the screen is less than 640px */}
      <NavBarMobile />
      <NavBarDesktop />
    </div>
  )
}

export default Header