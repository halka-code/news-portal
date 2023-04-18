import React, { useEffect, useState } from 'react';

const MainBlog = () => {
    const [newses, setNewses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setNewses(data))
    },[])
    return (
        <div className='border'>
            <h1>This is main blog content </h1>
        </div>
    );
};

export default MainBlog;