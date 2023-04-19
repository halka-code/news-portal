import React, { useContext, useEffect, useState } from 'react';
import { newsDataContext } from '../Context/newsContext';
import NewsCard from './NewsCard';

const MainBlog = () => {
    const { newses } = useContext(newsDataContext); 
    const [fiveBlog, setFiveBlog] = useState([]); 
    useEffect(()=>{
        setFiveBlog(newses.slice(0,5))
    }, [])

    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-5'>Top NEWS</h1>
            {
                fiveBlog.map(item => <NewsCard key={item._id} news={item}/>)
            }
        </div>
    );
};

export default MainBlog;