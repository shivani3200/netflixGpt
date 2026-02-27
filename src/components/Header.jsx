import React from 'react'
import logo from '../assets/images/Netflix_Logo.png'

const Header = () => {
  return (
    <div className='absolute z-10 px-8 py-2 bg-gradient-to-b bg-gradient-to-r from-black'>
        <img src={logo} alt="logo" className='w-44' />
    </div>
  )
}

export default Header