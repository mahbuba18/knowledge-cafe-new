
import PropTypes from 'prop-types';
import { FaBook } from "react-icons/fa";
const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const{id,title,cover,hashtag,reading_time,author,posted_date,author_img}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full h-[400px] mb-4' src={cover}alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex '>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button
                    onClick={()=>handleAddBookmark(blog)}
                     className='ml-2 text-2xl text-red-600'><FaBook /></button>

                </div>

            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtag.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-500 bg-slate-300 p-2 rounded-xl font-bold'>Mark As read</button>
            
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;