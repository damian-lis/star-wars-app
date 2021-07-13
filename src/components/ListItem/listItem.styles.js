import styled from 'styled-components/macro';

export const Container = styled.li`
  background-color: white;

  h3 {
    padding: 20px;
  }

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    background-color: rgb(247, 247, 247);
  }

  table thead {
    border-bottom: 1px solid black;
  }

  table td,
  table th {
    padding: 8px;
  }

  table th:first-child {
    text-align: left;
  }

  table td:first-child {
    text-align: left;
  }

  table td {
    text-align: right;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: right;
  }
`;
