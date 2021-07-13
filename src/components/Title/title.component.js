import React from 'react';
import { Title, Subtitle } from './title.styles';

const TitleComponent = ({ main, sub }) => {
  return (
    <Title>
      {main}
      <Subtitle>{sub}</Subtitle>
    </Title>
  );
};

export default TitleComponent;
