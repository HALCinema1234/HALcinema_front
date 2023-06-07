import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import {
    Button,
    FormControl,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    useToast,
} from '@chakra-ui/react';

export default function signup() {
    const toast = useToast();
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer>
                <Stack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel>メールアドレス</FormLabel>
                        <InputGroup>
                            <Input type='email' placeholder='Email' />
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>電話番号</FormLabel>
                        <InputGroup>
                            <Input type='tel' placeholder='000-0000-0000' />
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>パスワード</FormLabel>
                        <InputGroup>
                            <Input type='password' placeholder='6文字以上200文字以下' />
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>パスワード再入力</FormLabel>
                        <InputGroup>
                            <Input type='password' placeholder='上記のパスワードをもう一度記載' />
                        </InputGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel>生年月日</FormLabel>
                        <InputGroup>
                            <Input type='datetime-local' placeholder='2000/01/01' />
                        </InputGroup>
                    </FormControl>

                    <Button
                        colorScheme='blue'
                        onClick={() =>
                            toast({
                                position: 'bottom-left',
                                title: 'アカウントを登録しました',
                                description: 'ログインしてください',
                                status: 'success',
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    >
                        登録
                    </Button>
                </Stack>
            </MainContainer>
        </>
    );
}
