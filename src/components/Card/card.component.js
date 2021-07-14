import React from 'react';
import { Container } from './card.styles';

const CardComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardComponent;
