import { Container, Stack } from '@chakra-ui/react';
import React from 'react';

type Props = {
    children?: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
    return (
        <Container maxW='container.xl' paddingTop={110}>
            <Stack spacing={8}>{children}</Stack>
        </Container>
    );
};
