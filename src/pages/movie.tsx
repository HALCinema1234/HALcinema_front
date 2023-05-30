import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';
import { Header } from '@/components/ornagisms/Header';
import { MovieCard } from '@/components/ornagisms/movies/MovieCard';

const inter = Inter({ subsets: ['latin'] });

export default function Movie() {
    const movies = [
        {
            id: 1,
            title: '映画タイトル',
            image: 'https://placehold.jp/150x150.png',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 2,
            title: '映画タイトル',
            image: 'https://placehold.jp/150x150.png',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 2,
            title: '映画タイトル',
            image: 'https://placehold.jp/150x150.png',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 2,
            title: '映画タイトル',
            image: 'https://placehold.jp/150x150.png',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 2,
            title: '映画タイトル',
            image: 'https://placehold.jp/150x150.png',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
    ];

    const MoviewCardContainer = () => (
        <div>
            {movies.map((movie) => (
                <MovieCard />
            ))}
        </div>
    );

    return (
        <>
            <SHead title='HALシネマ' />
            <Header />
            <main>
                <MoviewCardContainer />
            </main>
        </>
    );
}
