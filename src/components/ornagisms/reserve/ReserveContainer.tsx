import { DetailCard } from '@/components/atoms/reserve/DetailCard';
import { Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

type Prosp = {
    children?: React.ReactNode;
};

export const ReserveContainer = ({ children }: Prosp) => {
    return (
        <SContainer>
            {children}
            <DetailCard />
        </SContainer>
    );
};

const SContainer = styled.div`
    display: grid;
    grid-template-columns: 9fr 3fr;
`;
