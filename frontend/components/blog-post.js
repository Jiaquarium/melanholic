const BlogPost = ({ title, date, body }) => (
    <>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <div>
            <p>
                {body}
            </p>
        </div>
    </>
);

export default BlogPost;