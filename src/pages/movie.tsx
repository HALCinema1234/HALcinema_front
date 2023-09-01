import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';
import { Header } from '@/components/ornagisms/Header';
import { MovieCard } from '@/components/ornagisms/movies/MovieCard';
import { TMovie } from '@/types/movie';
import styled from '@emotion/styled';
import { MainContainer } from '@/components/atoms/MainContainer';
import { Grid, Heading, Select, Tab, TabList, Tabs } from '@chakra-ui/react';
import useSWR from 'swr';
import { log } from 'console';

const inter = Inter({ subsets: ['latin'] });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Movie() {
    const { data, error } = useSWR<TMovie[]>(process.env.NEXT_PUBLIC_API_BASE_URL + 'v1/movies', fetcher);

    console.log(data);
    if (error) return <>エラーが発生しました</>;
    if (!data) return <>データがありません</>;
    const MovieCardContainer = () => (
        <Grid templateColumns='repeat(4, 1fr)' gap={4} style={{ marginTop: 20 }}>
            {data.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </Grid>
    );

    return (
        <>
            <SHead title='HALシネマ' />
            <Header />
            <MainContainer>
                <Heading>映画一覧</Heading>
                <Tabs variant='soft-rounded' colorScheme='blue' style={{ marginTop: 20 }}>
                    <TabList>
                        <Tab>上映中</Tab>
                        <Tab>上映予定</Tab>
                    </TabList>
                </Tabs>
                <Tabs variant='soft-rounded' colorScheme='purple' style={{ marginTop: 20 }}>
                    <TabList>
                        <Tab>全て</Tab>
                        <Tab>PG</Tab>
                        <Tab>R18</Tab>
                    </TabList>
                </Tabs>
                <MovieCardContainer />
            </MainContainer>
        </>
    );
}

const SMovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-row-gap: 50px;
    padding: 20px;
`;
