import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const { id } = useParams();
    const [news, setNews] = useState([]);
    const [singleNews, setSingleNews] = useState({});
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
    return (
        <div>
            <h1>This is blog</h1>
        </div>
    );
};

export default Blog;