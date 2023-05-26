import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <SHead title='HALシネマ' />
            <main></main>
        </>
    );
}
