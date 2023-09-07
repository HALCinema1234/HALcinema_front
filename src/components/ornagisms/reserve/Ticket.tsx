import { TTicket } from '@/types/ticket';
import { Box, Button, Flex, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

type Props = {
    ticket: TTicket;
};

export const Ticket = ({ ticket }: Props) => {
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
                    <Button colorScheme='green' size='sm' mr={1}>
                        -
                    </Button>{' '}
                    1{' '}
                    <Button colorScheme='green' size='sm' ml={1}>
                        +
                    </Button>
                </Box>
            </Flex>
        </Stat>
    );
};
