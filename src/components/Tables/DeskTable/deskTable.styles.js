import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 10px 18px;
`;

export const Row = styled.tr``;

export const Head = styled.thead`
  border-bottom: 1px solid
    ${({ theme: { colors } }) => colors.darkMedium && colors.darkMedium};
`;

export const HeadCell = styled.th`
  text-align: right;
  padding: 10px 0;
`;

export const Body = styled.tbody``;

export const BodyCell = styled.td`
  text-align: right;
  padding-right: 15px;
  line-height: 15px;
  &:last-of-type {
    padding-right: 0;
    padding-left: 20px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryWrapper = styled.div`
  width: 70px;
  margin-left: auto;
  font-weight: 400;
`;

export const CategoryIconContainer = styled.div``;

export const CategoryIcon = styled.img`
  width: 12px;
  margin-left: 5px;
  transform: translateY(15%);
`;

export const Table = styled.table`
  ${BodyCell}:first-child {
    text-align: left;
  }

  ${HeadCell}:first-child {
    ${CategoryWrapper} {
      margin: auto;
      width: auto;
      padding: 0;
      margin: 0;
    }
  }

  ${HeadCell}:first-child, ${BodyCell}:first-child {
    color: ${({ theme: { colors } }) => colors.turquoise && colors.turquoise};
  }
`;
