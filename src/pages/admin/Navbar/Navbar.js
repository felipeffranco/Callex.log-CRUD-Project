import React from 'react'
import NavDB from './NavData/NavDB'
import NavItems from './NavItems'

const Navbar = () => {
    return (
        <nav
            className='bg-[#08090D] col-span-2 border-r border-gray-200 h-[100vh] w-[80px] md:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
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