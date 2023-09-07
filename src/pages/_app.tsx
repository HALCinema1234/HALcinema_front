import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: '#F7FAFC',
            },
            // html: {
            //     height: '100%',
            // },
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </RecoilRoot>
    );
}
