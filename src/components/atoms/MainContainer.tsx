import styled from '@emotion/styled';
import React from 'react';

type Props = {
    children?: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
    return <SMainContainer>{children}</SMainContainer>;
};

const SMainContainer = styled.main`
    width: 1200px;
    margin: 0 auto;
    margin-top: 60px;
    padding-top: 50px;
`;
