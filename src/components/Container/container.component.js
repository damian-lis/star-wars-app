import React from 'react';
import { Container } from './container.styles';

const ContainerComponent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default ContainerComponent;
