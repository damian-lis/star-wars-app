import styled from 'styled-components/macro';

export const Image = styled.img`
  display: block;
  margin: 10px auto;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md && breakpoints.md}) {
    width: 200px;
  }
`;
