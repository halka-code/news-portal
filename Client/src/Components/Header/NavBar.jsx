import React, { useContext, useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/AuthContext';

const NavBar = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true)
    const pathName = location.pathname;
    useEffect(() => {
        if (pathName === '/login') {
            setIsLogin(true)
        }
        else {
            setIsLogin(false);
        }
    }, [pathName]);

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

    const { user, logout } = useContext(userContext);
    return (
        <div className='w-[90%] mx-auto'>
            <div className="grid grid-cols-3 justify-items-center content-between">
                <div className=""></div>
                <ul className='flex gap-5 text-light font-bold'>
                    {
                        navItems.map(item => <li key={item.url}><NavLink to={item.url}>{item.label}</NavLink></li>)
                    }
                </ul>
                <div className="flex gap-3 items-center ">
                    <span className='text-4xl'><FaRegUserCircle /></span>
                    {pathName === '/login' ?
                        <button onClick={() => navigate('/register')} className='px-4 py-2 bg-black text-white font-bold rounded'>Register</button>
                        :
                        user ?
                            <button onClick={() => logout()} className='px-4 py-2 bg-black text-white font-bold rounded'>Logout</button>
                            :
                            <button onClick={() => navigate('/login')} className='px-4 py-2 bg-black text-white font-bold rounded'>Login</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
