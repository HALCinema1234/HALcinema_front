import { Movie } from '@/types/movie';
import { Card, CardBody } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

type Props = {
    movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
    return (
        <SMovieCard>
            <Image
                src={movie.image}
                alt=''
                width={300}
                height={100}
                style={{
                    borderRadius: '10px 10px 0 0',
                }}
            />
            <p>{movie.title}</p>
        </SMovieCard>
    );
};

const SMovieCard = styled.div`
    width: 500;
    height: 300;
    border: 1px solid #999;
    border-radius: 10px;
    text-align: center;
`;
