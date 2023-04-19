import React from 'react';
import NavBar from '../Header/NavBar';
import { Link } from 'react-router-dom';

const Login = () => {
    const handelFromSubmit = (e)=> { 
        e.preventDefault()
    }
    return (
        <div className='bg-[#F3F3F3]  h-screen'>
            <div className="pt-6">
                <NavBar />
            </div>
            {/* <h1>Hello From Login </h1> */}
            <div className="h-[85vh] flex justify-center items-center overflow-hidden">
                <div className="bg-[#FFFFFF] px-14 py-6  w-[35%]">
                    <h1 className='text-2xl text-center font-bold mt-5 mb-5'>Login your account</h1>
                    <div className='border-b'></div>
                    <form onSubmit={handelFromSubmit}>
                        <label htmlFor="email" className='block font-bold my-2'>Email address</label>
                        <input className='bg-[#F3F3F3] w-full px-5 py-2 outline-none' type="email" name="email" placeholder='Enter your email address' />
                        <label htmlFor="password" className='block font-bold my-2'>Password</label>
                        <input className='bg-[#F3F3F3] w-full px-5 py-2 outline-none' type="password" name="password" placeholder='Enter your password' />
                        <button type='submit' className='block w-full my-4 bg-black px-4 py-2 text-white'>Login</button>
                    </form>
                    <p className='text-center'><small>Don't have any account ? <Link to='/register' className='text-orange-600'>Register</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;