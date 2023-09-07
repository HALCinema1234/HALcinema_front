import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { HeaderLogin } from '../atoms/HeaderLogin';
import {
    Button,
    Input,
    Link,
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
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/states';

export const HeaderUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [user, setUser] = useRecoilState(userState);

    const handleFetchUser = async () => {
        // const data = axios.get(
        //     process.env.NEXT_PUBLIC_API_BASE_URL! + 'v1/users?member_id=' + emailRef.current?.value,
        //     {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //     },
        // );
        // console.log(data);
        if (emailRef.current?.value === 'test' && passwordRef.current?.value === 'password') {
        }
    };

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <>
            {user.id != null ? (
                <SHeaderUserIcon />
            ) : (
                <Button onClick={onOpen} variant='ghost' _hover={{ backgroundColor: 'none', opacity: 0.5 }}>
                    <HeaderLogin />
                </Button>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>ログイン</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold'>メールアドレス</Text>
                        <Input
                            mt={2}
                            placeholder='メールアドレス'
                            size='lg'
                            variant='filled'
                            focusBorderColor='blue.400'
                            ref={emailRef}
                        />
                        <Text fontWeight='bold' style={{ marginTop: 30 }}>
                            パスワード
                        </Text>

                        <Input
                            mt={2}
                            placeholder='パスワード'
                            size='lg'
                            variant='filled'
                            focusBorderColor='blue.400'
                            ref={passwordRef}
                        />
                        <Link style={{ color: '#2b5abf' }} href='/signup'>
                            新規登録する{' '}
                        </Link>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            閉じる
                        </Button>
                        <Button variant='ghost' onClick={handleFetchUser}>
                            ログイン
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

const SHeaderUserIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius: 50%;
    margin: 0 auto;
`;
