import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts-data';

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

const Home = ({ allPostsData }) => (
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
                where the only way out is in. (yes, i came up with that all myself.)"
            </p>
            <p>
                - Ids, the sheepluff
            </p>
        </section>
        <section>
            <Link href="/posts/first-post">
                <a>first post</a>
            </Link>
        </section>
        <section>
            <Link href="/screen-shots">
                <a>screenshots</a>
            </Link>
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
);

export default Home;