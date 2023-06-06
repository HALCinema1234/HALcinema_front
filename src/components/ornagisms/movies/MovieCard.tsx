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
        <Card>
            <CardBody>
                <Image src={movie.image} alt='' width={100} height={100} />
            </CardBody>
        </Card>
    );
};

const SMovieCard = styled.div`
    width: 100;
    height: 100;
    border: 1px solid #999;
    border-radius: 10px;
`;
