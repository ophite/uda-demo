import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
    color: #000;
   font-size: 40px;

`;

export default () => {
  return (
    <Headline>
      {props.Headline}
    </Headline>
  );
};
