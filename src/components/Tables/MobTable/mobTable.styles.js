import styled from 'styled-components/macro';

export const Table = styled.table`
  font-size: 14px;
`;

export const Body = styled.tbody`
  ${({ even, theme: { colors } }) =>
    even &&
    `background-color: ${colors.lightMedium && colors.lightMedium}
`}
`;
export const BodyCell = styled.td`
  padding: 20px 10px;
  width: 50%;
  ${({ theme: { colors }, select }) => select && `color: ${colors.turquoise && colors.turquoise}`}
`;

export const CategoryWrapper = styled.div`
  width: 80px;
`;

export const Row = styled.tr`
  &:first-of-type {
    ${BodyCell} {
      padding-top: 30px;
    }
  }

  &:last-of-type {
    ${BodyCell} {
      padding-bottom: 30px;
    }
  }
`;
