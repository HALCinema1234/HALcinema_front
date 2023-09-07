import { MainContainer } from '@/components/atoms/MainContainer';
import PageTitle from '@/components/atoms/PageTitle';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { userState } from '@/recoil/states';
import { Card, CardBody, CardHeader, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function User() {
    const user = useRecoilValue(userState);

    const [data, setData] = useState();

    const fetchManageData = async () => {
        const data = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL! + 'v1/reserves/' + user.id, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        setData(data.data);
    };

    useEffect(() => {
        (async () => {
            await fetchManageData();
        })();
    }, []);

    return (
        <>
            <SHead title='ユーザー情報' />
            <Header />

            <MainContainer>
                <Card>
                    <CardHeader>ユーザー情報</CardHeader>
                    <CardBody>
                        <Text>{data.date}</Text>
                    </CardBody>
                </Card>
            </MainContainer>
        </>
    );
}
