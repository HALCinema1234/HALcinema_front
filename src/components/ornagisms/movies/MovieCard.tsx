import { TMovie } from '@/types/movie';
import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    Grid,
    GridItem,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '@/styles/galally.module.css';

type Props = {
    movie: TMovie;
};

export const MovieCard = ({ movie }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const images: ReactImageGalleryItem[] = movie.images.map((image) => {
        return {
            original: image,
            thumbnail: image,
        };
    });

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
                    <ModalHeader>{movie.title}</ModalHeader>
                    <ModalBody>
                        <Grid templateColumns='8fr 4fr' gap={4}>
                            {/* <GridItem> */}
                            <ImageGallery items={images} />
                            {/* </GridItem> */}
                            <GridItem p={4}>
                                <Stack spacing={4}>
                                    <Image
                                        src={'/' + movie.thumbnail}
                                        alt=''
                                        width={300}
                                        height={100}
                                        style={{ width: '100%' }}
                                    />{' '}
                                    <Text fontSize='xl' fontWeight='bold'>
                                        映画情報
                                    </Text>
                                    <Box>
                                        {movie.types.map((type, i) => (
                                            <Badge key={i} style={{ marginRight: 5 }} fontSize='l'>
                                                {type}
                                            </Badge>
                                        ))}
                                    </Box>
                                    <Text fontSize='xl'>上映時間</Text>
                                    <Text fontSize='l'>{movie.time}</Text>
                                </Stack>
                            </GridItem>
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
