import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import facebook from '../../assets/facebook-official.svg';
import instagram from '../../assets/instagram-icon.svg';
import twitter from '../../assets/twitter-official.svg';
import QZone1 from '../../assets/qZone1.png';
import QZone2 from '../../assets/qZone2.png';
import QZone3 from '../../assets/qZone3.png';
import { userContext } from '../Context/AuthContext';
const RightNav = () => {
    const { user, handelGoogleLogin, githubHandler } = useContext(userContext);
    const googleHandler = () => {
        handelGoogleLogin()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const GithubHandler = () => {
        githubHandler()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div className='ml-5 sticky bottom-0 '>
            <div className="">
                <div className="">

                    {
                        user ? <div className="">
                            <h1 className=' text-2xl font-bold'>{user ? `Welcome ${user.displayName}` : ''}</h1>
                            <p className='my-9'>Visit Daily for latest Newses</p>
                        </div> :
                            <>
                                <button onClick={googleHandler} className='inline-flex items-center border-blue-600 border rounded text-blue-600 px-3 py-1 mt-3'><FaGoogle />&nbsp; Login With Google</button>
                                <button onClick={GithubHandler} className='inline-flex items-center border-black mt-3 border rounded text-black px-3 py-1'><FaGithub />&nbsp; Login With Google</button>
                            </>
                    }
                </div>
                <div className="">
                    <h1 className='text-3xl my-6 '>Find Us On</h1>
                    <ul className='border-collapse border table w-full'>
                        <li className=' flex items-center gap-4 text-lg font-bold   p-3'>
                            <img src={facebook} className='w-[25px]' alt="" />
                            Facebook
                        </li>
                        <li className='border-t border-b flex items-center gap-4 text-lg font-bold   p-3'>
                            <img src={twitter} className='w-[25px]' alt="" />
                            Twitter
                        </li>
                        <li className=' flex items-center gap-4 text-lg font-bold   p-3'>
                            <img src={instagram} className='w-[25px]' alt="" />
                            Instagram
                        </li>
                    </ul>
                </div>
                {/* Q zone part  */}
                <div className="bg-[#F3F3F3] px-4 mt-10 py-4">
                    <h1 className='text-2xl font-bold mb-3'>Q-Zone</h1>
                    <img src={QZone1} alt="" />
                    <img src={QZone2} alt="" />
                    <img src={QZone3} alt="" />
                </div>
                <div className="bg-img text-center mt-7 text-white px-5 py-12">
                    <h1 className='text-3xl font-bold mb-3'>Create an Amazing Newspaper</h1>
                    <p className='text-base mb-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='px-4 py-2 bg-[#D72050] text-white '>Learn More </button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;