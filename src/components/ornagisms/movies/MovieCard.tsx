import { TMovie } from '@/types/movie';
import {
    Badge,
    Button,
    Card,
    CardBody,
    Grid,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

type Props = {
    movie: TMovie;
};

export const MovieCard = ({ movie }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Card onClick={() => onOpen()} _hover={{ opacity: 0.8, transition: 0.5, cursor: 'pointer' }}>
                <Image
                    src={'/' + movie.thumbnail}
                    alt=''
                    width={300}
                    height={100}
                    style={{
                        borderRadius: '10px 10px 0 0',
                        objectFit: 'cover',
                        height: 150,
                    }}
                />
                <CardBody maxH={140}>
                    <Heading size='sm'>
                        {movie.title.substring(0, 12)}
                        {movie.title.length > 12 && '...'}
                    </Heading>
                    {movie.types.map((type, i) => (
                        <Badge key={i} style={{ marginRight: 5 }}>
                            {type}
                        </Badge>
                    ))}
                </CardBody>
                {/* {select && <p>説明文あああああ</p>} */}
            </Card>
            <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>映画の詳細</ModalHeader>
                    <ModalBody>
                        <Grid templateColumns='8fr 4fr'>
                            <div style={{ backgroundColor: '#000' }} />
                            <Text>{movie.title}</Text>
                        </Grid>

                        <Text>{movie.data}</Text>
                        <Text>上映時間：{movie.time}</Text>
                        <Input
                            placeholder='日時'
                            type='datetime-local'
                            style={{
                                marginBottom: '10px',
                            }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Link href='/reserve/reserve1'>
                            <Button colorScheme='green'>予約する</Button>
                        </Link>
                    </ModalFooter>
                    <ModalCloseButton />
                </ModalContent>
            </Modal>
        </>
    );
};

const SMovieCard = styled.div`
    width: 500;
    height: 300;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    text-align: center;
`;
