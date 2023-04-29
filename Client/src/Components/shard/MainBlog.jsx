import React, { useContext, useEffect, useState } from 'react';
import { newsDataContext } from '../Context/newsContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsCard from './NewsCard';

const MainBlog = () => {
    const { newses } = useContext(newsDataContext);
    const [fiveBlog, setFiveBlog] = useState([]);
    useEffect(() => {
        setFiveBlog(newses.slice(0,2))
    }, [newses])

    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-5'>Top NEWS</h1>
            {/* {
                fiveBlog.map(item => <NewsCard key={item._id} news={item}/>)
            } */}
            <div className="h-[550px]">
                <InfiniteScroll
                    dataLength={fiveBlog.length}
                    next={() => setFiveBlog(newses.slice(0, fiveBlog.length + 2))}
                    hasMore={fiveBlog.length < newses.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={<h1>You are all set..!</h1>}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                      }

                >
                    {
                        fiveBlog.map(item => <NewsCard key={item._id} news={item} />)
                    }
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default MainBlog;