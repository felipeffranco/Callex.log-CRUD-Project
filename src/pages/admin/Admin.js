import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

const Admin = () => {
    return (
        <>
            <Header />
            <div className='w-full min-h-[90vh] grid grid-cols-12'>
                <Navbar />
            </div>
        </>
    )
}

export default Admin