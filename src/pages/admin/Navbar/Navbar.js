import React from 'react'
import NavDB from './NavData/NavDB'
import NavItems from './NavItems'

const Navbar = () => {
    return (
        <nav
            className='bg-[#08090D] border-r-2 border-emerald-300 h-[95vh] w-[80px] md:w-[225px] pt-8 px-1'>
            <div
                className='space-y-8 w-full'>
                {
                    NavDB.map(link => {
                        return (
                            <NavItems link={link} key={link.id} />
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar