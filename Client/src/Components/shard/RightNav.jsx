import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div className='ml-5'>
            <h1 className=' text-2xl font-bold'>Login with</h1>
            <div className="">
                <div className="">
                    <button className='inline-flex items-center border-blue-600 border rounded text-blue-600 px-3 py-1 mt-3'><FaGoogle />&nbsp; Login With Google</button>
                    <button className='inline-flex items-center border-black mt-3 border rounded text-black px-3 py-1'><FaGithub />&nbsp; Login With Google</button>
                </div>
                <div className="">
                    <h1>Find Us On</h1>
                    <ul className='border-collapse table w-full'>
                        <li className='border   p-3'>hasib-4</li>
                        <li className='border   p-3'>hasib-4</li>
                        <li className='border   p-3'>hasib-4</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default RightNav;