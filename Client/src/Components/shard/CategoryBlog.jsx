    import React, { useContext, useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
    import { newsDataContext } from '../Context/newsContext';
    import Hero from '../Header/Hero';
    import LeftNav from './LeftNav';
    import RightNav from './RightNav';
    import NewsCard from './NewsCard';

    const CategoryBlog = () => {
        let { id } = useParams();
        const { newses } = useContext(newsDataContext);
        const [categoriesBlog, setCategoriesBlog] = useState([]);
        useEffect(() => {
            const matching = newses.filter(item => item.category_id == id);
            // console.log(matching) 
            setCategoriesBlog(matching);
        }, [newses, id])
        const [categories, setCategories] = useState([])
        const [oneCategory, setOneCategory] = useState({}); 
        useEffect(() => {
            fetch('https://news-server-codewithhasib.vercel.app/categories')
                .then(res => res.json())
                .then(data => setCategories(data))
                .catch(err => console.log(err))
        }, [])
        useEffect(()=>{
            const theCategories = categories.find(item => item.id == id); 
            // console.log(theCategories)
            setOneCategory(theCategories); 
        },[categories , id])
        return (
            <div >
                <Hero />
                <div className="grid grid-cols-5 mt-14 w-[90%] mx-auto">
                    <div className="col-span-1 px-5">
                        <LeftNav />
                    </div>
                    <div className="col-span-3">
                        {/* <MainBlog /> */}
                        <h1 className='text-center text-2xl font-bold my-7 text-orange-600'>{oneCategory?.name}</h1>
                        {
                            categoriesBlog.length === 0 ? <h1 className='text-2xl font-bold text-black text-center my-9 border py-6 '>Nothing Here.........</h1>
                                : categoriesBlog.map(item => <NewsCard key={item._id} news={item} />)
                        }
                    </div>
                    <div className="col-span-1">
                        <RightNav />
                    </div>
                </div>
            </div>
        );
    };

    export default CategoryBlog;