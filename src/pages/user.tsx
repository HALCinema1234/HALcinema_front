import { MainContainer } from '@/components/atoms/MainContainer';
import PageTitle from '@/components/atoms/PageTitle';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export default function User() {
    return (
        <>
            <SHead title='ユーザー情報' />
            <Header />

            <MainContainer></MainContainer>
        </>
    );
}
