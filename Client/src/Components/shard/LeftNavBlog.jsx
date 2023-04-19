import React from 'react';
import { formatDate } from '../../Utilities/formatedDate';
import { FaCalendar } from 'react-icons/fa';

const LeftNavBlog = ({ news }) => {
    const { image_url, title, rating, author } = news;
    // console.log(formatDate('2022-08-24 17:27:34'))
    return (
        <div className='p-2 rounded-lg border my-3'>
            <img src={image_url} alt="" />
            <p className='text-base my-2'>{title.slice(0,50)}...<span className='text-green-500 hover:cursor-pointer'>see more</span></p>
            <div className="flex text-light justify-between">
                <p>{rating.badge}</p>
                <span className='flex items-center'>
                    <FaCalendar />
                    <p>{formatDate(author.published_date)}</p>
                </span>
            </div>
        </div>
    );
};

export default LeftNavBlog;