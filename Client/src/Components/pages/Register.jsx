import React, { useContext } from 'react';
import NavBar from '../Header/NavBar';
import { Link } from 'react-router-dom';
import { userContext } from '../Context/AuthContext';

const Register = () => {
    const { register  , user} = useContext(userContext);
    const handelFromSubmit = e => {
        e.preventDefault()
        let form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log('Email', email, 'Name', name, password)
        register(email , password)
        .then(result => { 
            const user = result.user ; 
            // console.log(user); 
        })
        .catch(err => console.log(err.code))
    }
    console.log(user)
    return (
        <div className='bg-[#F3F3F3]  h-screen'>
            <div className="pt-6">
                <NavBar />
            </div>
            {/* <h1>Hello From Login </h1> */}
            <div className="h-[85vh] flex justify-center items-center overflow-hidden">
                <div className="bg-[#FFFFFF] px-14 py-6  w-[35%]">
                    <h1 className='text-2xl text-center font-bold mt-5 mb-5'>Register</h1>
                    <div className='border-b'></div>
                    <form onSubmit={handelFromSubmit}>
                        <label htmlFor="name" className='block font-bold my-2'>Your Name</label>
                        <input className='bg-[#F3F3F3] w-full px-5 py-2 outline-none' type="text" name="name" placeholder='Enter your Name' />
                        <label htmlFor="email" className='block font-bold my-2'>Email address</label>
                        <input className='bg-[#F3F3F3] w-full px-5 py-2 outline-none' type="email" name="email" placeholder='Enter your email address' />
                        <label htmlFor="password" className='block font-bold my-2'>Password</label>
                        <input className='bg-[#F3F3F3] w-full px-5 py-2 outline-none' type="password" name="password" placeholder='Enter your email address' />
                        <button type='submit' className='block w-full my-4 bg-black px-4 py-2 text-white'>Register</button>
                    </form>
                    <p className='text-center'><small>Already have an account ? <Link to='/login' className='text-orange-600'>Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;