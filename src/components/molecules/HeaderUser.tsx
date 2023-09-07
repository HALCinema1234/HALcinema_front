import styled from '@emotion/styled';
import React from 'react';
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

export const HeaderUser = () => {
    const user = 1;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {user ? <SHeaderUserIcon onClick={onOpen} /> : <HeaderLogin />}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>ログイン</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold'>ユーザー名</Text>
                        <Input mt={2} placeholder='ユーザー名' size='lg' variant='filled' focusBorderColor='blue.400' />
                        <Text fontWeight='bold' style={{ marginTop: 30 }}>
                            パスワード
                        </Text>

                        <Input mt={2} placeholder='パスワード' size='lg' variant='filled' focusBorderColor='blue.400' />
                        <Link style={{ color: '#2b5abf' }} href='/signup'>
                            新規登録する{' '}
                        </Link>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            閉じる
                        </Button>
                        <Button variant='ghost'>ログイン</Button>
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
