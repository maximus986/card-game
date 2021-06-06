import { Card as CardModel } from 'data/game/cardsDeck';
import React, { useEffect, useState } from 'react';
import cardBack from '../images/card-back.jpg';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';
import { NextPlayer, setNextPlayer, setTableCards } from './gameSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

interface BotProps {
  name: string;
  botId: Exclude<NextPlayer, 'me'>;
  nextToPlay: NextPlayer;
}

export const Bot = ({ name, botId, nextToPlay }: BotProps) => {
  const [cards, setCards] = useState<CardModel[]>(mockCards);
  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);
  const dispatch = useDispatch();
  const handlePlay = () => {
    const card: CardModel = cards[Math.floor(Math.random() * cards.length)];
    dispatch(setTableCards(card));
    const afterPlayCards = cards.filter((playedCard) => playedCard.code !== card.code);
    setCards(afterPlayCards);
    dispatch(setNextPlayer(nextToPlay));
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (nextPlayer === botId) {
      const randomTimeout = Math.floor(Math.random() * 10);
      const timeout = setTimeout(() => {
        handlePlay();
      }, randomTimeout * 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [cards, dispatch, nextPlayer]);

  return (
    <div>
      <PlayerInfo>
        <PlayerName>{name}</PlayerName>
        <PlayerScore>0</PlayerScore>
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

const mockCards: CardModel[] = [
  {
    code: 'AS',
    value: 'ACE',
    image: 'https://deckofcardsapi.com/static/img/AS.png',
  },
  {
    code: '5H',
    value: '5',
    image: 'https://deckofcardsapi.com/static/img/5H.png',
  },
  {
    code: 'KS',
    value: '14',
    image: 'https://deckofcardsapi.com/static/img/KS.png',
  },
  {
    code: '7S',
    value: '7',
    image: 'https://deckofcardsapi.com/static/img/7S.png',
  },
  {
    code: '2S',
    value: '2',
    image: 'https://deckofcardsapi.com/static/img/2S.png',
  },
  {
    code: 'QH',
    value: '13',
    image: 'https://deckofcardsapi.com/static/img/QH.png',
  },
  {
    code: '6C',
    value: '6',
    image: 'https://deckofcardsapi.com/static/img/6C.png',
  },
  {
    code: 'JC',
    value: '12',
    image: 'https://deckofcardsapi.com/static/img/JC.png',
  },
  {
    code: '5D',
    value: '5',
    image: 'https://deckofcardsapi.com/static/img/5D.png',
  },
  {
    code: '0C',
    value: '10',
    image: 'https://deckofcardsapi.com/static/img/0C.png',
  },
];
