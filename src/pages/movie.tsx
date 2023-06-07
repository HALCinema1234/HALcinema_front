import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';
import { Header } from '@/components/ornagisms/Header';
import { MovieCard } from '@/components/ornagisms/movies/MovieCard';
import { Movie } from '@/types/movie';
import styled from '@emotion/styled';
import { MainContainer } from '@/components/atoms/MainContainer';
import { Heading, Select, Tab, TabList, Tabs } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Movie() {
    const movies: Movie[] = [
        {
            id: 1,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 2,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 3,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 4,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 5,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 5,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 5,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 5,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 5,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 5,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
            description: '映画の説明',
            price: 1800,
            time: 120,
            rating: 4.5,
        },
        {
            id: 5,
            title: '映画タイトル',
            image: '/dummy/Interstellar-HD_1920x1200.jpg',
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
                <Heading>映画一覧</Heading>
                <Tabs variant='soft-rounded' colorScheme='green' style={{ marginTop: 20 }}>
                    <TabList>
                        <Tab>上映中</Tab>
                        <Tab>上映予定</Tab>
                    </TabList>
                </Tabs>
                <Select placeholder='区分'>
                    <option>全て</option>
                    <option>上映中</option>
                    <option>上映予定</option>
                </Select>
                <MoviewCardContainer />
            </MainContainer>
        </>
    );
}

const SMovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    padding: 20px;
`;
