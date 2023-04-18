import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold'>All Categories</h1>
            <ul className='mt-4'>
                {/* <li className='active-categories text-center py-4'>Category 1</li> */}
                {
                    categories.map(category =><NavLink className={({isActive})=> isActive? 'active-categories' :''}  key={category.id}><li className='text-lg font-bold text-left pl-6 my-2 bg-red-50 py-3'>{category.name}</li></NavLink> )
                }
            </ul>
        </div>
    );
};

export default LeftNav;