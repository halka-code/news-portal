import React, { createContext, useEffect } from 'react';

const newsDataContext = createContext(null);
const NewsContext = ({ children }) => {
    const [newses, setNewses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNewses(data))
    }, [])
    return (
        <newsDataContext.Provider value={newses}>
            {children}
        </newsDataContext.Provider>
    );
};

export default NewsContext;