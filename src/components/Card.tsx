import styled from '@emotion/styled';
import React from 'react';

interface CardProps {
  image: string;
}

export const Card = ({ image }: CardProps) => (
  <Figure>
    <img src={image} alt="" />
  </Figure>
);

const Figure = styled.figure`
  width: 100px;
`;
