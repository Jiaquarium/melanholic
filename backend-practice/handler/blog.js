import { getSortedPostsData } from '../posts';

const sortedBlog = async (req, res, next) => {
    const allPostsData = await getSortedPostsData();
    return res.json({blogData: allPostsData});
}

export default {
    sortedBlog
};