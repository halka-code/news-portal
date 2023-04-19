import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    let navItems = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'About Us',
            url: '/about'
        },
        {
            label: 'Contact Us',
            url: '/contact'
        }
    ];

    return (
        <div className='w-[90%] my-4 mx-auto'>
            <div className="grid grid-cols-3 justify-items-center content-between">
                <div className=""></div>
                <ul className='flex gap-5 text-light font-bold'>
                    {
                        navItems.map(item => <li key={item.url}><NavLink to={item.url}>{item.label}</NavLink></li>)
                    }
                </ul>
                <div className="flex gap-3 items-center ">
                    <span className='text-4xl'><FaRegUserCircle /></span>
                    <button className='px-4 py-2 bg-black text-white font-bold rounded'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;