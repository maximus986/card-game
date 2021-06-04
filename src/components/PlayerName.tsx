import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

// TODO: Make this styled not react component
export const PlayerName: FunctionComponent = ({ children }) => <Name>{children}</Name>;

const Name = styled.h2`
  font-size: 36px;
  margin-bottom: 8px;
`;
