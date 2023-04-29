import React, { createContext, useEffect, useState } from 'react';

export const newsDataContext = createContext(null);
const NewsContext = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [newses, setNewses] = useState([]);   
    const [page, setPage] = useState(2);

    useEffect(() => {
        
        fetch('https://news-server-codewithhasib.vercel.app/news/')
        .then(res => res.json())
        .then(data => setNewses(data))
    },[]);
    const newsValue = { newses , loader}
    return (
        <newsDataContext.Provider value={newsValue}>
            {children}
        </newsDataContext.Provider>
    );
};

export default NewsContext;