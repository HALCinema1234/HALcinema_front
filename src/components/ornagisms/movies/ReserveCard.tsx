import { TManage } from '@/types/movie';
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Button,
    Text,
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
                {manages.map((m) => (
                    <Box>
                        <Text fontSize='l' fontWeight='bold'>
                            {`${m.start.slice(0, -3)} ~ ${m.end.slice(0, -3)}`}
                        </Text>
                        <Text fontSize='l'>{m.types}</Text>
                    </Box>
                ))}

                <Button colorScheme='green'>予約する</Button>
            </AccordionPanel>
        </AccordionItem>
    );
};
