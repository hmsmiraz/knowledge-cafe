import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover, author_name, author_image, posted_time, reading_time, hashtags} = blog;
    return (
        <div className='mb-20  space-y-4'>
            <img className='mt-2 w-full mb-8 p-4' src={cover} alt={`Cover picture of the title: ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_image} alt="" />
                    <div className='ml-5'>
                        <h3 className="text-2xl">{author_name}</h3>
                        <p>{posted_time}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <span className='text-xl' >{reading_time} min read</span>
                    <button  onClick={() => handleAddToBookmark(blog)}
                    className='text-2xl ml-2 text-cyan-800'>    
                        <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold py-2">Title: {title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> 
                        <a href="">#{hash}</a>
                    </span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blog;