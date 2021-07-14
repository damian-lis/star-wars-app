import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  max-width: 790px;
  margin: 0 auto;
  padding: 25px 30px;
  background-color: #e0e6ee;
  border-radius: 8px;

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints && breakpoints.mobile}) {
    padding: 15px;
  }
`;
