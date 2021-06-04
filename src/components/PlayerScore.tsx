import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

// TODO: Make this styled not react component
export const PlayerScore: FunctionComponent = ({ children }) => (
  <Score>Score: {children}</Score>
);

const Score = styled.p`
  font-size: 24px;
`;
