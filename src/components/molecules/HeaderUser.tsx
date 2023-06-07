import styled from '@emotion/styled';
import React from 'react';
import { HeaderLogin } from '../atoms/HeaderLogin';
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
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
                        <Input placeholder='ユーザー名' size='lg' variant='filled' focusBorderColor='blue.400' />
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
