import styled from '@emotion/styled';
import React from 'react';
import { HeaderLogin } from '../atoms/HeaderLogin';

export const HeaderUser = () => {
    const user = 1;

    return user ? <SHeaderUserIcon /> : <HeaderLogin />;
};

const SHeaderUserIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius: 50%;
    margin: 0 auto;
`;
