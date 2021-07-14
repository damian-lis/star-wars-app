import styled from 'styled-components/macro';

export const TableContainer = styled.div``;

export const Table = styled.table`
  font-size: 14px;
`;

export const Row = styled.tr``;

export const Body = styled.tbody`
  ${({ even }) =>
    even &&
    `background-color:#E5E5E5
`}
`;
export const BodyCell = styled.td`
  padding: 20px 10px;
  width: 50%;
  ${({ theme: { colors }, light }) =>
    light && `color:${colors.light ? colors.light : 'black'}`}
`;

export const CategoryWrapper = styled.div`
  width: 80px;
`;
