import React from 'react';
import titleIMG from '../../assets/logo.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";
import NavBar from './NavBar';
const Hero = () => {
    let date = moment().format("MMMM D YYYY");
    let week = moment().format('dddd')
    return (
        <div className=''>
            <div className="flex w-[90%] mx-auto justify-center flex-col items-center">
            <div className="">
                <img className='w-fit mt-3' src={titleIMG} alt="" />
                <p className='text-center text-xl mt-4 text-[#706F6F]'>Journalism Without Fear or Favor</p>
                <p className='text-center mt-3 mb-7'><span className='font-bold'>{week}</span> , <span className='text-[#706F6F]'>{date}</span></p>
            </div>
            <div className="bg-[rgb(243,243,243)] flex items-center w-full p-4">
                <button className='px-5 py-2  bg-[#D72050] text-white'>Latest</button>
                <Marquee speed={50} gradientColor={[243,243,243]}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            </div>
            <NavBar/>
        </div>
    );
};

export default Hero;