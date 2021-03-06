import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  }
  
  body{
    font-family: 'Barlow', sans-serif;
    color: ${({ theme: { colors } }) => colors.dark && colors.dark}
  }

  ul{
    list-style-type: none;
    margin:0;
    padding:0
  };

  a{
    text-decoration:none;
  }

  button{
    outline: none;
    border: none;
    cursor:pointer;
  }

  input{
    outline-style:none;
    border: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
  }

  table td,
  table th {
    padding: 20px 0px;
    font-weight: 400;
  }
`;
