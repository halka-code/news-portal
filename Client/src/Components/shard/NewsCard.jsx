import React from 'react';
import { formatDate } from '../../Utilities/formatedDate';
import { AiOutlineShareAlt } from 'react-icons/ai'
import { BiBookmark, BiStar } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { FaBookmark } from 'react-icons/fa';
const NewsCard = ({ news }) => {
    const { author, image_url, total_view, title, rating, details , _id} = news;
    const navigate = useNavigate(); 
    return (
        <div className='mb-4 rounded-lg border'>
            <div className="title flex justify-between bg-[#F3F3F3] px-6 py-3">
                <div className="flex items-center gap-3">
                    <img src={author.img} className='w-[40px] h-[40px]' alt="" />
                    <span>
                        <h1>{author.name}</h1>
                        <p>{formatDate(author.published_date)}</p>
                    </span>
                </div>
                <div className="flex text-light items-center gap-2 text-4xl">
                    <AiOutlineShareAlt />
                    <BiBookmark />
                </div>
            </div>
            <div className="mx-5">
                <h1 className='text-3xl font-bold my-4'>{title}</h1>
                <img loading='lazy' src={image_url} alt="" />
                <p className='text-[#706F6F] my-5'>{details.slice(0, 100)}...<span onClick={()=>navigate(`blog/${_id}`)} className='text-orange-500 hover:cursor-pointer font-bold'>Read More</span></p>
                <div className="flex justify-between mb-4">
                    <p className='text-xl text-orange-400 flex items-center'><BiStar /><BiStar /><BiStar /><BiStar /><BiStar /> <span className='text-black ml-2'>{rating.number}</span></p>
                    <p className='inline-flex items-center gap-1'><FaEye /> {total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;