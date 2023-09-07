import { reserveState } from '@/recoil/states';
import { TTicket } from '@/types/ticket';
import { Box, Button, Flex, Stat, StatLabel, StatNumber, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';

type Props = {
    ticket: TTicket;
    handleClick: (ticket: TTicket, isPlus: boolean) => void;
};

export const Ticket = ({ ticket, handleClick }: Props) => {
    const [reserveInfo, setReserveInfo] = useRecoilState(reserveState);

    const selectedTicket = reserveInfo.tickets.find((t) => t.id === ticket.id);

    return (
        <Stat
            border={'1px solid'}
            shadow='xl'
            px={{ base: 2, md: 4 }}
            py={5}
            rounded={'lg'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
        >
            <Flex justifyContent='space-between'>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight='medium' isTruncated>
                        {ticket.name}
                    </StatLabel>
                    <StatNumber fontSize='4xl' fontWeight={'medium'}>
                        {ticket.price + '円'}
                    </StatNumber>
                </Box>
                <Box my='auto' alignContent='center'>
                    <Button
                        colorScheme='teal'
                        size='sm'
                        mr={1}
                        onClick={() => handleClick(ticket, false)}
                        isDisabled={
                            selectedTicket?.count === undefined ? true : selectedTicket?.count < 1 ? true : false
                        }
                    >
                        -
                    </Button>{' '}
                    <Text as='div' display='inline-block' fontWeight='bold' width={8} textAlign='center'>
                        {selectedTicket?.count === undefined ? 0 : selectedTicket?.count}
                    </Text>{' '}
                    <Button
                        colorScheme='teal'
                        size='sm'
                        ml={1}
                        onClick={() => handleClick(ticket, true)}
                        isDisabled={
                            selectedTicket?.count === undefined ? false : selectedTicket?.count > 9 ? true : false
                        }
                    >
                        +
                    </Button>
                </Box>
            </Flex>
        </Stat>
    );
};
