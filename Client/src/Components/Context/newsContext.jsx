import React, { createContext, useEffect, useState } from 'react';

export const newsDataContext = createContext(null);
const NewsContext = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [newses, setNewses] = useState([]);   
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                setNewses(data)
                setLoader(false); 
            })
            .catch(err => console.log(err))

    }, [])
    const newsValue = { newses , loader}
    return (
        <newsDataContext.Provider value={newsValue}>
            {children}
        </newsDataContext.Provider>
    );
};

export default NewsContext;