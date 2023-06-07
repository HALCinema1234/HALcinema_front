import { Movie } from '@/types/movie';
import {
    Button,
    Card,
    CardBody,
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

type Props = {
    movie: Movie;
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
                    {/* {select && <p>説明文あああああ</p>} */}
                </SMovieCard>
            </motion.div>
            <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>映画の詳細</ModalHeader>
                    <ModalBody>
                        <Image
                            src={movie.image}
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
                        <Button colorScheme='green'>予約する</Button>
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
