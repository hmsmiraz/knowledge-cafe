import PropTypes from 'prop-types'; 

const Blog = ({ blog }) => {
    const {title, cover, author_name, author_image, posted_time, reading_time, hashtags} = blog;
    return (
        <div>
            <img className='w-3/5' src={cover} alt={`Cover picture of the title: ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_image} alt="" />
                    <div className='ml-5'>
                        <h3 className="text-2xl">{author_name}</h3>
                        <p>{posted_time}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">Title: {title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> 
                        <a href="">#{hash}</a>
                    </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;