import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';
import { Header } from '@/components/ornagisms/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Movie() {
    return (
        <>
            <SHead title='HALシネマ' />
            <Header />

            <main></main>
        </>
    );
}
