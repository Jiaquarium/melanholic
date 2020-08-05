import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts-data';

const FADE_TIME = 5;
const TIME_INTERVAL = 0.1;

/*
    only ran on server-side
    only can be exported form a page
*/
export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {props: {
        allPostsData
    }};
}

const Home = ({ allPostsData }) => {
    const [alpha, setAlpha] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => fade(alpha), TIME_INTERVAL);
        if (alpha <= 0) clearInterval(interval)
        return () => clearInterval(interval);
    });

    const fade = (alpha) => {
        const alphaInterval = 1 / (FADE_TIME / TIME_INTERVAL);
        const newAlpha = Math.max(alpha - alphaInterval, 0);
        setAlpha(newAlpha);
    }

    return (
        <div style={{backgroundColor: `rgba(0, 0, 0, ${alpha})`}}>
            <Layout home>
                <Head>
                
                </Head>
                <section className={utilStyles.headingMd}>
                    {/* add a fade in from black on coming to site */}
                    <p>
                        "a game about trying to AGH!!! WHO TURNED OFF THE LIGHTS IN HERE?! okay 
                        that’s better. let me try that again... a game about trying to find what’s
                        been wreaking havoc on our dungeon.
                    </p>
                    <p>
                        where the only way out is in."
                    </p>
                    <p>
                        - Ids, the sheepluff
                    </p>
                </section>
                <section>
                    <div>
                        <Link href="/posts/first-post">
                            <a>first post</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/screen-shots">
                            <a>screenshots</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/posts/all-posts">
                            <a>all blog posts</a>
                        </Link>
                    </div>
                </section>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                    {allPostsData.map(({ Id, date, title }) => (
                        <li className={utilStyles.listItem} key={Id}>
                            {title}
                            <br />
                            {Id}
                            <br />
                            {date}
                        </li>
                    ))}
                    </ul>
                </section>
            </Layout>
        </div>
    );
};

export default Home;