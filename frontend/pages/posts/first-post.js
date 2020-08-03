import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import HeadMetadata from '../../components/head-metadata.js';
import Layout from '../../components/layout.js';

class FirstPost extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
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