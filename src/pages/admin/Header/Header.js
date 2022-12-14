import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { CgLogOut } from 'react-icons/cg'

const Header = () => {
  return (
    <div className='bg-[#08090D] w-full py-2 items-center justify-between flex px-12'>
      <div className='w-full space-x-4 items-center justify-start py-2'>
        <h1 className='text-white text-3xl' >callex<span className='text-[#37DE8F] text-3xl'>.log</span></h1>
      </div>
      <div className='items-center justify-end space-x-6 flex w-full'>
        <CgLogOut className='header-icon' />
        <CgProfile className='header-icon' />
      </div>
    </div>
  )
}

export default Header