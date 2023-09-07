import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveContainer } from '@/components/ornagisms/reserve/ReserveContainer';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { Ticket } from '@/components/ornagisms/reserve/Ticket';
import { reserveState } from '@/recoil/states';
import { TTicket, ticketList } from '@/types/ticket';
import { Box, Button, Card, Flex, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

export default function reserve2() {
    const [reserveInfo, setReserveInfo] = useRecoilState(reserveState);

    const router = useRouter();

    const tickets = ticketList;

    const handleRoute = () => {
        router.push('reserve3');
    };

    const handleClickTicket = (ticket: TTicket, isPlus: boolean) => {
        const selectedTicket = reserveInfo.tickets.find((t) => t.id === ticket.id);

        selectedTicket?.count === undefined
            ? setReserveInfo({
                  ...reserveInfo,
                  tickets: [...reserveInfo.tickets, { ...ticket, count: 1 }],
              })
            : isPlus
            ? setReserveInfo({
                  ...reserveInfo,
                  tickets: reserveInfo.tickets.map((t) => (t.id === ticket.id ? { ...t, count: t.count! + 1 } : t)),
              })
            : setReserveInfo({
                  ...reserveInfo,
                  tickets: reserveInfo.tickets.map((t) => (t.id === ticket.id ? { ...t, count: t.count! - 1 } : t)),
              });
        console.log(reserveInfo.tickets);
    };
    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={1} />
                <ReserveContainer onClick={handleRoute}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }} p={4} height={300}>
                        {tickets.map((ticket) => (
                            <Ticket key={ticket.id} ticket={ticket} handleClick={handleClickTicket} />
                        ))}
                    </SimpleGrid>
                </ReserveContainer>
            </MainContainer>
        </>
    );
}
