import { Card as CardModel } from 'data/game/cardsDeck';
import React, { useCallback, useEffect } from 'react';
import cardBack from '../images/card-back.jpg';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';
import { Player, setGameState } from './gameSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setTimeout } from 'timers';
import { playerIdToPlayerNameMap } from './playerIdToPlayerNameMap';
import { usePlay } from './usePlay';
import { usePlayerScore } from './usePlayerScore';

interface BotProps {
  botId: Exclude<Player, 'me'>;
  nextToPlay: Player;
}

export const Bot = ({ botId, nextToPlay }: BotProps) => {
  const [handlePlay, cards] = usePlay(botId, nextToPlay);
  const playerScore = usePlayerScore(botId);

  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);
  const numberOfPlayers = useSelector((state: RootState) => state.game.numberOfPlayers);

  const dispatch = useDispatch();

  const handleEndGame = useCallback(() => {
    if (
      numberOfPlayers - 1 ===
        parseInt(botId[botId.lastIndexOf(String(numberOfPlayers - 1))], 10) &&
      cards.length === 0
    ) {
      dispatch(setGameState('end'));
    } else {
      dispatch(setGameState('roundStart'));
    }
  }, [numberOfPlayers, botId, cards]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (nextPlayer === botId) {
      const randomTimeout = Math.floor(Math.random() * 5);
      timeout = setTimeout(() => {
        const card: CardModel = cards[Math.floor(Math.random() * cards.length)];
        handlePlay(card);
      }, randomTimeout * 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [nextPlayer]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleEndGame();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [handleEndGame]);

  return (
    <div>
      <PlayerInfo>
        <PlayerName>{playerIdToPlayerNameMap[botId]}</PlayerName>
        <PlayerScore>{playerScore}</PlayerScore>
      </PlayerInfo>
      <CardsList>
        {cards.map((card, index) => (
          <CardsListItem key={card.code} {...{ index }}>
            <Card image={cardBack} />
          </CardsListItem>
        ))}
      </CardsList>
    </div>
  );
};

const PlayerInfo = styled.div`
  margin-bottom: 8px;
  @media (min-width: 992px) {
    margin-bottom: 24px;
  }
`;

const CardsList = styled.ul`
  display: flex;
  position: relative;
`;

const CardsListItem = styled.li<{ index: number }>`
  position: absolute;
  left: ${(props) => props.index * 10}px;
  z-index: ${(props) => props.index};
  @media (min-width: 768px) {
    left: ${(props) => props.index * 25}px;
  }
  @media (min-width: 1280px) {
    left: ${(props) => props.index * 40}px;
  }
  @media (min-width: 1600px) {
    left: ${(props) => props.index * 50}px;
  }
`;
