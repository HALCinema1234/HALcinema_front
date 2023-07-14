import { TMovie } from '@/types/movie';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
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
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
    movie: TMovie;
};

export const MovieCard = ({ movie }: Props) => {
    const [select, setSelect] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setSelect(true)}
                onHoverEnd={() => setSelect(false)}
                onTap={() => onOpen()}
            >
                <Card>
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
                    <CardBody>
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
            </motion.div>
            <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>映画の詳細</ModalHeader>
                    <ModalBody>
                        <Image
                            src={''}
                            alt=''
                            width={300}
                            height={100}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <Text>{movie.title}</Text>
                        <Text>{movie.description}</Text>
                        <Text>{movie.price}円</Text>
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
