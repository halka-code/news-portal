import React, { useContext, useEffect } from 'react';
import NavBar from '../Header/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/AuthContext';
import { useState } from 'react';
import { MoonLoader } from 'react-spinners';

const Login = () => {
    const { login, user, loading } = useContext(userContext);
    const [loader, setLoading] = useState(false);
    const location = useLocation(); 
    // console.log()
    let goTo = location.state?.from?.pathname || '/';
    console.log(goTo) 
    // console.log(user )
    const navigate = useNavigate();
    const handelFromSubmit = (e) => {
        setLoading(true);
        e.preventDefault()
        let email = e.target.email.value;
        let password = e.target.password.value;
        login(email, password)
            .then(result => {
                setLoading(false)
                navigate(goTo , {replace : true})
            })
            .catch(err => {
                console.log(err.code)
                setLoading(false);
            })
    }
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])
    if (loading) {
        return <h1>Please wait</h1>
    }

    return (
        user ? <h1>You are already logged in</h1> :
            loader ? <div className="h-screen flex justify-center items-center">
                <MoonLoader
                    color="#36d7b7"
                    size={60}
                />
            </div> : <div className='bg-[#F3F3F3]  h-screen'>
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
                            <input required className='bg-[#F3F3F3] w-full px-5 py-2 outline-none' type="email" name="email" placeholder='Enter your email address' />
                            <label htmlFor="password" className='block font-bold my-2'>Password</label>
                            <input required className='bg-[#F3F3F3] w-full px-5 py-2 outline-none' type="password" name="password" placeholder='Enter your password' />
                            <button type='submit' className='block w-full my-4 bg-black px-4 py-2 text-white'>Login</button>
                        </form>
                        <p className='text-center'><small>Don't have any account ? <Link to='/register' className='text-orange-600'>Register</Link></small></p>
                    </div>
                </div>
            </div>
    );
};

export default Login;