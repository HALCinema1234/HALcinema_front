import { DetailCard } from '@/components/atoms/reserve/DetailCard';
import { Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

type Props = {
    children?: React.ReactNode;
    onClick: () => void;
};

export const ReserveContainer = ({ children, onClick }: Props) => {
    return (
        <SContainer>
            {children}
            <DetailCard onClick={onClick} />
        </SContainer>
    );
};

const SContainer = styled.div`
    display: grid;
    grid-template-columns: 8fr 4fr;
`;
