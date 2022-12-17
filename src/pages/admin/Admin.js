import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import AboutUs from './AboutUs/AboutUs'
import Containers from './Containers/Containers'
import Services from './Services/Services'
import Profile from './Profile/Profile'

const Admin = () => {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/:itemId/edit" element={<Dashboard />} />
                <Route path="/admin/about-us" element={<AboutUs />} />
                <Route path="/admin/containers" element={<Containers />} />
                <Route path="/admin/services" element={<Services />} />
                <Route path="/admin/profile-info" element={<Profile />} />
            </Routes>
        </>
    )
}

export default Admin