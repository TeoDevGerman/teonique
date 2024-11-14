'use client';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

import { useEffect, useState } from 'react';


export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/hello');
            const data = await res.json();
            setMessage(data.message);
        }
        fetchData();
    }, []);

    return (
        (<div>
            <Head>
                <title>My Next.js Website</title>
                <meta name="description" content="This is a sample Next.js website" />
            </Head>
            <header className={styles.header}>
                <h1>Welcome to My Website</h1>
                <nav>
                    <Link href="./about" className={styles.navLink}>About</Link>
                    <Link href="./contact" className={styles.navLink}>Contact</Link>
                </nav>
            </header>
            <div>
                <h1>Welcome to My Website</h1>
                <p>{message}</p>
            </div>
            <main>
                <p>This is a sample website created with Next.js.</p>
            </main>
        </div>)
    );
}
