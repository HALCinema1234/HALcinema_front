import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export const TheatreTable = () => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal' width={800}>
                <Thead>
                    <Tr>
                        <Th>情報</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>住所</Td>
                        <Td>〒450-0002 愛知県名古屋市中村区名駅4丁目27-1</Td>
                    </Tr>
                    <Tr>
                        <Td>電話番号</Td>
                        <Td>123-456-7890</Td>
                    </Tr>
                    <Tr>
                        <Td>営業時間</Td>
                        <Td>10:00~翌1:00</Td>
                    </Tr>
                    <Tr>
                        <Td>定休日</Td>
                        <Td>なし</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};
