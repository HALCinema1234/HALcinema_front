import { reserveState } from '@/recoil/states';
import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
type Props = {
    onClick: () => void;
};

export const DetailCard = ({ onClick }: Props) => {
    const reserveInfo = useRecoilValue(reserveState);

    const formatDate = (date: string) => {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);
        return `${month}月${day}日`;
    };

    return (
        <Card>
            <CardHeader>
                <Heading size='md'>購入内容</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            作品名
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {reserveInfo.movie?.title}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            上映日時
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {formatDate(reserveInfo.movieManage!.day) +
                                ' ' +
                                reserveInfo.movieManage?.start.slice(0, -3)}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            上映時間
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {reserveInfo.movieManage?.screening_time + '分'}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            上映スクリーン
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {reserveInfo.movieManage?.movie_id}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            座席
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {reserveInfo.seats.length > 0 ? reserveInfo.seats.map((seat) => seat + ' ') : '未選択'}
                        </Text>
                    </Box>{' '}
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            チケット
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {/* {reserveInfo.seats?.map((seat) => seat + ' ')} */}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            お支払い金額
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {/* {reserveInfo.seats?.map((seat) => seat + ' ')} */}
                        </Text>
                    </Box>
                    <Button colorScheme='teal' size='lg' onClick={onClick}>
                        次へ
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    );
};
