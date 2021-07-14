import React from 'react';
import { List } from './filmList.styles';

const ListComponent = ({ children }) => {
  return <List>{children}</List>;
};

export default ListComponent;
