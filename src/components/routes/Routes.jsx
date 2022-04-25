import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from '../../pages/Auth/Login'
import Detail from '../../pages/Home/Detail'
import Home from '../../pages/Home/Home'
import Layout from '../Layout'


function AppRoutes() {
    return (
        <div>
            <Routes>
                {/* Nested Route Include Navbar */}
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/detail' element={<Detail />} />
                </Route>
                {/* Auth Route Without Navbar */}
                <Route path='/auth/login' element={<Login />} />
            </Routes>

        </div>
    )
}

export default AppRoutes