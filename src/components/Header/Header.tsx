import React from 'react'
import NavBarMobile from './NavBarMobile'
import NavBarDesktop from './NavBarDesktop'

function Header() {
  return (
    <div className='flex bg-base-100'>
      <NavBarMobile />
      <NavBarDesktop />
    </div>
  )
}

export default Header