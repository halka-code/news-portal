import React, { useContext, useEffect, useState } from 'react';
import { newsDataContext } from '../Context/newsContext';
import NewsCard from './NewsCard';

const MainBlog = () => {
    const { newses } = useContext(newsDataContext); 

    return (
        <div>
            <h1>This is main blog content </h1>
            {
                newses.map(item => <NewsCard key={item._id} news={item}/>)
            }
        </div>
    );
};

export default MainBlog;