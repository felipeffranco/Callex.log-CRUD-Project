import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import AboutUs from './AboutUs/AboutUs'

const Admin = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    )
}

export default Admin