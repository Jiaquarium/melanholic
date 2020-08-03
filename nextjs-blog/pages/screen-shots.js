import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import HeadMetadata from '../components/head-metadata';
import ScreenShot from '../components/screen-shots/screen-shot';

let screenShotData = [
    {
        src: "/images/game-screenshot_KTV-room-2.png",
        alt: "game screenshot of a KTV room",
        caption: "bottles bottles bottles."
    },
    {
        src: "/images/game-screenshot_eileen-1.png",
        alt: "game screenshot of speaking to Eileen",
        caption: "sigh..."
    }
];

const ScreenShots = () => (
    <Layout>
        <Head>
            {
                // need this syntax for Components to work in Head
                HeadMetadata()
            }
            <title>screenshots</title>
        </Head>
        <h1>screenshots</h1>
        <section>
            {screenShotData.map((screenShot, i) => (
                <ScreenShot
                    key={`screen-shot_${i}`}
                    {...screenShot}
                />
            ))}
        </section>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
);

export default ScreenShots;

