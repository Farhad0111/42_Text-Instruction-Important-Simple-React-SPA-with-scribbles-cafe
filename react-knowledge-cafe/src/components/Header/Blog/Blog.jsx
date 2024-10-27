import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div>
            <img className="w-56" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img} alt={`${author}'s picture`} />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx}> <a href={`#${hash}`}>#{hash}</a> </span>
                ))}
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Blog;
