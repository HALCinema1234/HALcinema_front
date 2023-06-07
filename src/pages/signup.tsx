import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';

export default function signup() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer></MainContainer>
        </>
    );
}
