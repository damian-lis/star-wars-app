import styled from 'styled-components/macro';

export const ListItem = styled.li`
  margin: 20px 0;
  background-color: white;
  border-radius: 4px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 10px 18px;
  box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
  color: ${({ theme: { colors } }) => colors.turquoise && colors.turquoise};
  cursor: pointer;

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.md && breakpoints.md}) {
    padding: 10px 10px;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
`;

export const TitleIcon = styled.img``;
