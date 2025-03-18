import React from 'react'
import {assets} from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className="w-20 min-w-[10%] max-w-[80px]" src={assets.logo} alt="Logo" />
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 smp:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
