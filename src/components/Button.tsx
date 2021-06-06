import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => (
  <StyledButton type="button" onClick={() => onClick()}>
    <Label>{children}</Label>
  </StyledButton>
);

const StyledButton = styled.button`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #ffc400;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    background: #6db06d;
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: #fff;
`;
