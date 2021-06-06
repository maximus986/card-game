import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  isDisabled,
}) => (
  <StyledButton
    type="button"
    onClick={() => onClick()}
    disabled={isDisabled}
    {...{ isDisabled }}
  >
    <Label>{children}</Label>
  </StyledButton>
);

const StyledButton = styled.button<{ isDisabled: boolean }>`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${(props) => (props.isDisabled ? '#ccc' : '#ffc400')};
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    ${(props) => (props.isDisabled ? null : '#6db06d')};
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: #fff;
`;
