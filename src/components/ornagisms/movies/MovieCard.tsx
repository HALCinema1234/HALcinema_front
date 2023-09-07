import { TManage, TMovie } from '@/types/movie';
import {
    Accordion,
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
import { ReserveCard } from './ReserveCard';
import { useRecoilState } from 'recoil';
import { reserveState } from '@/recoil/states';
import { useRouter } from 'next/router';

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
    console.log(movie.manages);

    const managesCollectedByDay = movie.manages.reduce((acc, cur) => {
        const day = cur.day;
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(cur);
        return acc;
    }, {} as { [key: string]: TManage[] });

    const [reserveInfo, setReserveInfo] = useRecoilState(reserveState);
    const router = useRouter();

    const handleClickReserveButton = (manage: TManage) => {
        setReserveInfo({
            movie: movie,
            movieManage: manage,
            seats: [],
            tickets: [],
            payment: 0,
        });
        router.push('/reserve/reserve1');
    };

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
            </Card>
            <Modal isOpen={isOpen} onClose={onClose} size='5xl' scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {movie.title + ' '}
                        {movie.on_air ? (
                            <Badge colorScheme='green'>上映中</Badge>
                        ) : (
                            <Badge colorScheme='red'>上映予定</Badge>
                        )}
                    </ModalHeader>
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
                                    <Box></Box>
                                    <Box>
                                        <Text fontSize='l' fontWeight='bold'>
                                            上映時間
                                        </Text>
                                        <Text fontSize='l'>{movie.time}分</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize='l' fontWeight='bold'>
                                            年齢制限
                                        </Text>
                                        <Text fontSize='l'>{movie.age_restrictions}</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize='l' fontWeight='bold'>
                                            タグ
                                        </Text>
                                        <Box>
                                            {movie.types.map((type, i) => (
                                                <Badge key={i} style={{ marginRight: 5 }} fontSize='l'>
                                                    {type}
                                                </Badge>
                                            ))}
                                        </Box>
                                    </Box>
                                </Stack>
                            </GridItem>
                        </Grid>
                        <Stack spacing={4}>
                            <Box>
                                <Text fontSize='l' fontWeight='bold'>
                                    あらすじ
                                </Text>
                                <Text>{movie.introduction}</Text>
                            </Box>
                            <Box>
                                <Text fontSize='l' fontWeight='bold'>
                                    スタッフ
                                </Text>
                                <Text>{movie.data}</Text>
                            </Box>
                            <Box>
                                <Text fontSize='l' fontWeight='bold'>
                                    予約
                                </Text>
                                <Accordion defaultIndex={[0]} allowMultiple p={4}>
                                    {Object.keys(managesCollectedByDay).map((day, i) => (
                                        <ReserveCard
                                            manages={managesCollectedByDay[day]}
                                            handleClickReserveButton={handleClickReserveButton}
                                        />
                                    ))}
                                </Accordion>
                            </Box>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Link href='/reserve/reserve1'>
                            <Button colorScheme='green'>予約する</Button>
                        </Link> */}
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
