import PropTypes from 'prop-types'; 
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ml-5 bg-slate-200  mt-2 pt-4">
            <div className='bg-neutral-300'>
                <h3 className='text-4xl'>
                Reading Time: {readingTime} 
                </h3>
            </div>
            <h2 className="text-2xl font-bold text-center text-cyan-800 mt-2">Bookmark Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}
export default Bookmarks;