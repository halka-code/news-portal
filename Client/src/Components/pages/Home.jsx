import React from 'react';
import Hero from '../Header/Hero';
import LeftNav from '../shard/LeftNav';
import RightNav from '../shard/RightNav';
import MainBlog from '../shard/MainBlog';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="grid grid-cols-5 mt-14 w-[90%] mx-auto">
                <div className="col-span-1">
                    <LeftNav />
                </div>
                <div className="col-span-3">
                    <MainBlog />
                </div>
                <div className="col-span-1">
                    <RightNav />
                </div>
            </div>
        </div>
    );
};

export default Home;