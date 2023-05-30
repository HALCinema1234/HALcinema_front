import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';
import { Header } from '@/components/ornagisms/Header';
import { MovieCard } from '@/components/ornagisms/movies/MovieCard';
import { Movie } from '@/types/movie';
import styled from '@emotion/styled';
import { MainContainer } from '@/components/atoms/MainContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Movie() {
    const movies: Movie[] = [
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
        <SMovieContainer>
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
        </SMovieContainer>
    );

    return (
        <>
            <SHead title='HALシネマ' />
            <Header />
            <MainContainer>
                <MoviewCardContainer />
            </MainContainer>
        </>
    );
}

const SMovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
`;
