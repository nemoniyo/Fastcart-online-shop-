import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const Layout = () => {

    return (
        <div>
            <Navbar/>
            <ul>
                <li>
                    <Link to={"/"}></Link>
                </li>
                
            </ul>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout
