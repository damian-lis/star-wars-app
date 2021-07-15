import React from 'react';
import { Image } from './logo.styles';
import { logo } from 'assets';

const LogoComponent = ({ ...restProps }) => {
  return <Image src={logo} {...restProps} />;
};

export default LogoComponent;
