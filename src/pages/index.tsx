import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { SHead } from '@/components/ornagisms/SHead';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <SHead title='HALシネマ' />
            <main className={styles.main}></main>
        </>
    );
}
