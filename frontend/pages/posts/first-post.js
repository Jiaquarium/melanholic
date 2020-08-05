import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import HeadMetadata from '../../components/head-metadata.js';
import Layout from '../../components/layout.js';
import axios from 'axios';

class FirstPost extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            blogData: []
        };
    }

    componentDidMount() {
        this.fetchBlog();
    }

    async fetchBlog() {
        const { blogData } = await axios.get('http://127.0.0.1:8000/blog').then(({data}) => data);
        this.setState({ blogData });
    }

    render = () => {
        const headMetadata = HeadMetadata();
        return (
            <Layout>
                <Head>
                    {
                        // need this syntax for Components to work in Head
                        HeadMetadata()
                    }
                    <title>First Post</title>
                </Head>
                <h1>First Post</h1>
                
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>
        );
    };
}

export default FirstPost;