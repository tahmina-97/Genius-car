import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsHandbag, BsSearch } from "react-icons/bs";
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                const errorMessage = error.message;
                console.error('error', error);
            })
    }
    const menuItems = <>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/content'>Content</Link>
            {
                user?.email ?
                    <>
                        <Link to='/orders'>orders</Link>
                        <button onClick={handleLogOut} className='btn btn-error text-white hover:bg-red-500'>Sign Out</button>

                    </>
                    :
                    <Link to='/login'>Login</Link>
            }


        </li>
    </>


    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center w-60 justify-between'>
                    <BsHandbag></BsHandbag>
                    <BsSearch></BsSearch>
                    <Link>
                        <button className="btn btn-outline text-orange-clr hover:bg-orange-clr hover:border-transparent">Appointment</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Header;