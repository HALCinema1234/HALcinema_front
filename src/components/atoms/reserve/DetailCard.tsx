import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';
type Props = {
    onClick: () => void;
};

export const DetailCard = ({ onClick }: Props) => {
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
                            RRR
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            上映日時
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            8月8日(日) 12:00
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            上映日時
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            8月8日(日) 12:00
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            上映スクリーン
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            8月8日(日) 12:00
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
