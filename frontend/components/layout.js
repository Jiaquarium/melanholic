import Head from 'next/head';
import Link from 'next/link';
import HeadMetadata from './head-metadata';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

const name = "melanholic";

const Layout = ({children, home}) => (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/icon-ids_25x25.png" />
            {HeadMetadata() /* needs this syntax to work in Head */}
        </Head>
        <header className={styles.header}>
        {home ? (
            <>
                <img
                    src="/images/icon-ids_600x600.png"
                    className={`${styles.headerHomeImage}`}
                    alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
        ) : (
            <>
                <Link href="/">
                    <a>
                        <img
                        src="/images/icon-ids_600x600.png"
                        className={`${styles.headerImage}`}
                        alt={name}
                        />
                    </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                </h2>
            </>
        )}
        </header>
        <main>
            {children}
        </main>
    </div>
);

export default Layout;