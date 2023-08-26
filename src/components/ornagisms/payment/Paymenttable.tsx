import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export const Paymenttable = () => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal' width={700}>
                <TableCaption>料金一覧</TableCaption>
                <Thead>
                    <Tr>
                        <Th>カテゴリ</Th>
                        <Th isNumeric>料金</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>一般</Td>
                        <Td isNumeric>1800円</Td>
                    </Tr>
                    <Tr>
                        <Td>大学生</Td>
                        <Td isNumeric>1600円</Td>
                    </Tr>
                    <Tr>
                        <Td>中学・高校生</Td>
                        <Td isNumeric>1400円</Td>
                    </Tr>
                    <Tr>
                        <Td>シニア（60歳以上）</Td>
                        <Td isNumeric>1000円</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};
