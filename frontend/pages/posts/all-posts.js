import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeadMetadata from '../../components/head-metadata.js';
import Layout from '../../components/layout.js';
import BlogPost from '../../components/blog-post.js';
import axios from 'axios';

const BACKEND_ENDPOINT = 'http://localhost:8000/blog';

const fetchBlogData = () => axios.get(BACKEND_ENDPOINT).then(({data}) => data.blogData);

const AllPosts = () => {
    const [ blogData, setBlogData ] = useState([]);
    useEffect(() => {
        const asyncFetch = async () => {
            const data = await fetchBlogData();
            setBlogData(data);
        }
        asyncFetch();
    });
    
    return (
        <Layout>
            <Head>
                {
                    // need this syntax for Components to work in Head
                    HeadMetadata()
                }
                <title>First Post</title>
            </Head>
            {
                blogData && blogData.map(({matterResult}) => (
                    <BlogPost
                        key={`${matterResult.data.title}_${matterResult.data.date}`}
                        title={matterResult.data.title}
                        date={matterResult.data.date}
                        body={matterResult.content}
                    />
                ))
            }
            <h4>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h4>
        </Layout>
    );
}

export default AllPosts;