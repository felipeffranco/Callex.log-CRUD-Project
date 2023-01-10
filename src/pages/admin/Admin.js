import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Containers from './Containers/Containers'

const Admin = () => {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/:itemId/edit" element={<Dashboard />} />
                <Route path="/admin/containers" element={<Containers />} />
            </Routes>
        </>
    )
}

export default Admin