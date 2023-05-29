import styled from '@emotion/styled';
import React from 'react';
import { HeaderNav } from '../atoms/HeaderNav';

type Props = {};

export const Header = () => {
    return (
        <SHeader>
            <HeaderNav name='1' href='' />
        </SHeader>
    );
};

const SHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
`;
