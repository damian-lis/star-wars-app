import React from 'react';
import { Container } from './container.styles';

const ContainerComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerComponent;
