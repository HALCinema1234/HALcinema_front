import { Movie } from '@/types/movie';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

type Props = {
    movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
    return (
        <SMovieCard>
            <Image src={movie.image} alt='' width={100} height={100} />
        </SMovieCard>
    );
};

const SMovieCard = styled.div`
    width: 100;
    height: 100;
    border: 1px solid #333;
    border-radius: 10px;
`;
