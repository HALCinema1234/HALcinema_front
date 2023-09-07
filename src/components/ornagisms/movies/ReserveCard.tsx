import { TManage } from '@/types/movie';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Text,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
    manage: TManage;
};

export const ReserveCard = ({ manage }: Props) => {
    console.log(manage);

    return (
        <AccordionItem>
            <Text fontSize='l' fontWeight='bold'>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                        {manage.day + `（${manage.screening_time}分）` + ' '}
                        {manage.types.map((type, i) => (
                            <Badge colorScheme='green' style={{ marginRight: 5 }} fontSize='sm'>
                                {type}
                            </Badge>
                        ))}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
                <Text fontSize='l' fontWeight='bold'>
                    上映時間
                </Text>
            </AccordionPanel>
        </AccordionItem>
    );
};
