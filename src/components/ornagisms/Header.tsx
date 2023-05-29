import styled from '@emotion/styled';
import React from 'react';
import { HeaderNav } from '../atoms/HeaderNav';
import { HeaderLogo } from '../atoms/HeaderLogo';
import { HeaderUser } from '../molecules/HeaderUser';

type Props = {};

export const Header = () => {
    return (
        <SHeader>
            <HeaderLogo />
            <HeaderNav name='1' href='' />
            <HeaderUser />
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
`;
