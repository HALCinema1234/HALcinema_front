import { TManage } from '@/types/movie';
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Button,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Thead,
    Tr,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
    manages: TManage[];
};

export const ReserveCard = ({ manages }: Props) => {
    console.log(manages);

    const manage = manages[0];

    return (
        <AccordionItem>
            <Text fontSize='l' fontWeight='bold'>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                        {manage.day + `（${manage.screening_time}分）` + ' '}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
                <TableContainer>
                    <Table>
                        <Thead fontWeight='bold'>
                            <Tr>
                                <Td>上映時間</Td>
                                <Td>シアター番号</Td>
                                <Td>上映タイプ</Td>
                                <Td>予約</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {manages.map((m) => (
                                <Tr>
                                    <Td>{`${m.start.slice(0, -3)} ~ ${m.end.slice(0, -3)}`}</Td>
                                    <Td>{m.theater_id}</Td>
                                    <Td>
                                        {manage.types.map((type, i) => (
                                            <Badge colorScheme='green' style={{ marginRight: 5 }} fontSize='sm'>
                                                {type}
                                            </Badge>
                                        ))}
                                    </Td>
                                    <Td>
                                        <Button colorScheme='green' size='sm'>
                                            予約する
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </AccordionPanel>
        </AccordionItem>
    );
};
