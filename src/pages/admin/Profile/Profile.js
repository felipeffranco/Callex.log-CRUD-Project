import React from 'react'
import Navbar from "../Navbar/Navbar"

const Profile = () => {
    return (
        <>
            <Navbar />
            <header className="bg-bgPrimary shadow border-b border-emerald-300 border-opacity-50">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Profile Information</h1>
                </div>
            </header>
        </>
    )
}

export default Profile