import React from 'react';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { usePlay } from './usePlay';
import { usePlayerScore } from './usePlayerScore';

export const Player = () => {
  const [handlePlay, cards] = usePlay('me', 'bot1');
  const playerScore = usePlayerScore('me');

  const gameState = useSelector((state: RootState) => state.game.gameState);
  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);

  const isDisabled = gameState === 'roundEnd' || nextPlayer !== 'me';

  return (
    <div>
      <PlayerInfo>
        <PlayerName variant="human">Me</PlayerName>
        <PlayerScore>{playerScore}</PlayerScore>
      </PlayerInfo>
      <CardsList>
        {cards.map((card) => (
          <li key={card.code}>
            <Button
              onClick={() => {
                handlePlay(card);
              }}
              type="button"
              disabled={isDisabled}
              {...{ isDisabled }}
            >
              <Card image={card.image} />
            </Button>
          </li>
        ))}
      </CardsList>
    </div>
  );
};

const PlayerInfo = styled.div`
  margin-bottom: 24px;
`;

const CardsList = styled.ul`
  display: flex;
`;

const Button = styled.button<{ isDisabled: boolean }>`
  position: relative;
  display: block;
  transition: all linear 0.2s;
  cursor: ${(props) => (props.isDisabled ? 'initial' : 'pointer')};
  &:hover {
    transform: ${(props) => (props.isDisabled ? null : 'translateY(-20px)')};
  }
`;
