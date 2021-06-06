import { Card as CardModel } from 'data/game/cardsDeck';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { setNextPlayer, setTableCards } from './gameSlice';
import { RootState } from 'store';
// import { usePlay } from './usePlay';

export const Player = () => {
  // const [handlePlay, cards] = usePlay(mockCards, 'bot1');
  const gameState = useSelector((state: RootState) => state.game.gameState);
  const score = useSelector((state: RootState) => state.game.score);
  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);
  const playerCards = useSelector((state: RootState) => state.game.playerCards);
  const [cards, setCards] = useState<CardModel[]>(
    () => playerCards.find((item) => item.playerId === 'me')?.cards ?? [],
  );
  const dispatch = useDispatch();

  const handlePlay = (card: CardModel) => {
    dispatch(setTableCards({ ...card, playerId: 'me' }));
    const afterPlayCards = cards.filter((playedCard) => playedCard.code !== card.code);
    setCards(afterPlayCards);
    dispatch(setNextPlayer('bot1'));
  };

  const isDisabled = gameState === 'roundEnd' || nextPlayer !== 'me';
  const playerScore = score.find((item) => item.playerId === 'me')?.value;

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
