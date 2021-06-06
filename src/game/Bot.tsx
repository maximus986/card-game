import { Card as CardModel } from 'data/game/cardsDeck';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import cardBack from '../images/card-back.jpg';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';
import { Player, setGameState, setNextPlayer, setTableCards } from './gameSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setTimeout } from 'timers';

interface BotProps {
  name: string;
  botId: Exclude<Player, 'me'>;
  nextToPlay: Player;
}

export const Bot = ({ name, botId, nextToPlay }: BotProps) => {
  const playerCards = useSelector((state: RootState) => state.game.playerCards);
  const [cards, setCards] = useState<CardModel[]>(
    () => playerCards.find((item) => item.playerId === botId)?.cards ?? [],
  );
  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);
  const numberOfPlayers = useSelector((state: RootState) => state.game.numberOfPlayers);
  const score = useSelector((state: RootState) => state.game.score);
  const dispatch = useDispatch();

  const handlePlay = () => {
    const card: CardModel = cards[Math.floor(Math.random() * cards.length)];
    dispatch(setTableCards({ ...card, playerId: botId }));
    const afterPlayCards = cards.filter((playedCard) => playedCard.code !== card.code);
    setCards(afterPlayCards);
    dispatch(setNextPlayer(nextToPlay));
  };

  const playerScore = score.find((item) => item.playerId === botId)?.value;
  const handleEndGame = useCallback(() => {
    if (
      numberOfPlayers - 1 ===
        parseInt(botId[botId.lastIndexOf(String(numberOfPlayers - 1))], 10) &&
      cards.length === 0
    ) {
      dispatch(setGameState('end'));
    } else {
      dispatch(setGameState('start'));
    }
  }, [numberOfPlayers, botId, cards]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (nextPlayer === botId) {
      const randomTimeout = Math.floor(Math.random() * 5);
      const timeout = setTimeout(() => {
        handlePlay();
      }, randomTimeout * 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
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
        <PlayerName>{name}</PlayerName>
        <PlayerScore>{playerScore}</PlayerScore>
      </PlayerInfo>
      <CardsList>
        {cards.map((card, index) => (
          <CardsListItem
            key={card.code}
            style={{ left: `${index * 50}px`, zIndex: index }}
          >
            <Card image={cardBack} />
          </CardsListItem>
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
  position: relative;
`;

const CardsListItem = styled.li`
  position: absolute;
`;
