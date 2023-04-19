import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RightNav from '../shard/RightNav';
import Hero from '../Header/Hero';
import { BiLeftArrow } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Blog = () => {
    const { id } = useParams();
    const [news, setNews] = useState([]);
    const [singleNews, setSingleNews] = useState({});
    const [threeNews, setThreeNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    useEffect(() => {
        const matchingNews = news.find(item => item._id == id);
        
        setSingleNews(matchingNews)
    }, [news])
    console.log(singleNews)

    // console.log(id)
    if (!news) {
        return <h1>Loading........</h1>
    }
    // const { image_url, title, details } = singleNews;
    return (
        <>
            <Hero />
            <div className='grid mt-6 grid-cols-4 w-[90%] mx-auto'>
                <div className="col-span-3">
                    <h1 className='text-2xl font-semibold'>Dragon News</h1>
                    <div className="px-10 mt-7">
                        <img src={singleNews?.image_url} alt="" />
                        <h1 className='text-3xl font-bold my-6'>{singleNews?.title}</h1>
                        <p className='text-[#706F6F]'>{singleNews?.details}</p>
                        <button className='bg-[#D72050] mt-5 inline-flex items-center text-white px-5 py-2'><AiOutlineArrowLeft />&nbsp; All news in this category</button>
                    </div>
                    <div className="">
                        <h1>Editors Insight</h1>
                    </div>
                </div>
                <div className="col-span-1">
                    <RightNav />
                </div>
            </div>
        </>
    );
};

export default Blog;