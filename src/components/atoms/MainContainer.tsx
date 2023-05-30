import styled from '@emotion/styled';
import React from 'react';

type Props = {
    children?: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
    return <SMainContainer>{children}</SMainContainer>;
};

const SMainContainer = styled.main`
    margin-top: 60px;
    padding: 0 20px;
`;
