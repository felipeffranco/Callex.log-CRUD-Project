import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Containers from './Containers/Containers'
import Services from './Services/Services'
import Profile from './Profile/Profile'
import Login from './Login/Login'

const Admin = () => {
    return (
        <>
            <Routes>
                <Route path='/sign-in' element={<Login />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/:itemId/edit" element={<Dashboard />} />
                <Route path="/admin/containers" element={<Containers />} />
                <Route path="/admin/services" element={<Services />} />
                <Route path="/admin/profile-info" element={<Profile />} />
            </Routes>
        </>
    )
}

export default Admin