import React from 'react';
import { List } from './filmList.styles';

const ListComponent = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

export default ListComponent;
