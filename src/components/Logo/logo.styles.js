import styled from 'styled-components/macro';

export const Image = styled.img`
  display: block;
  margin: 10px auto;

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints && breakpoints.mobile}) {
    width: 200px;
  }
`;
