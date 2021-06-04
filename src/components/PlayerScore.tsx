import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export const PlayerScore: FunctionComponent = ({ children }) => (
  <Score>Score: {children}</Score>
);

const Score = styled.p`
  font-size: 24px;
  color: #fff;
`;
