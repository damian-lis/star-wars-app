import React from 'react';
import { Container } from './card.styles';

const CardComponent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default CardComponent;
