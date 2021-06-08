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
  width: 35px;
  @media (min-width: 768px) {
    width: 40px;
  }
  @media (min-width: 992px) {
    width: 50px;
  }
  @media (min-width: 1600px) {
    width: 100px;
  }
`;
