import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type PlayerNameVariant = 'human' | 'bot';

interface PlayerNameProps {
  variant?: PlayerNameVariant;
}

export const PlayerName: FunctionComponent<PlayerNameProps> = ({
  variant = 'bot',
  children,
}) => <Name {...{ variant }}>{children}</Name>;

const Name = styled.h2<{ variant: PlayerNameVariant }>`
  font-size: 16px;
  margin-bottom: 2px;
  color: ${(props) => (props.variant === 'bot' ? '#6DB06D' : '#ffc400')};
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 2px;
  }
  @media (min-width: 992px) {
    font-size: 36px;
    margin-bottom: 8px;
  }
`;
