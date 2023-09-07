import { MainContainer } from '@/components/atoms/MainContainer';
import PageTitle from '@/components/atoms/PageTitle';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export default function Payment() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer>
                <PageTitle title='チケット料金一覧' />
                <Flex direction='column' alignItems='center'>
                    <Paymenttable />
                </Flex>
            </MainContainer>
        </>
    );
}
