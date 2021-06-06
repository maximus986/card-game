import { Card as CardModel } from 'data/game/cardsDeck';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { setNextPlayer, setTableCards, NextPlayer } from './gameSlice';
import { RootState } from 'store';

export const Player = () => {
  const [cards, setCards] = useState<CardModel[]>(mockCards);
  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);
  const dispatch = useDispatch();

  // TODO: Candidate for custom hook
  const handlePlay = (card: CardModel) => {
    dispatch(setTableCards(card));
    const afterPlayCards = cards.filter((playedCard) => playedCard.code !== card.code);
    setCards(afterPlayCards);
    dispatch(setNextPlayer('bot1'));
  };
  return (
    <div>
      <PlayerInfo>
        <PlayerName variant="human">Me</PlayerName>
        <PlayerScore>0</PlayerScore>
      </PlayerInfo>
      <CardsList>
        {cards.map((card) => (
          <li key={card.code}>
            <Button
              onClick={() => {
                handlePlay(card);
              }}
              type="button"
              disabled={nextPlayer !== 'me'}
              {...{ nextPlayer }}
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

const Button = styled.button<{ nextPlayer: NextPlayer }>`
  position: relative;
  display: block;
  transition: all linear 0.2s;
  cursor: ${(props) => (props.nextPlayer === 'me' ? 'pointer' : 'initial')};
  &:hover {
    transform: ${(props) => (props.nextPlayer === 'me' ? 'translateY(-20px)' : null)};
  }
`;

const mockCards: CardModel[] = [
  {
    code: 'AS',
    image: 'https://deckofcardsapi.com/static/img/AS.png',
    value: 'ACE',
  },
  {
    code: '2S',
    image: 'https://deckofcardsapi.com/static/img/2S.png',
    value: '2',
  },
  {
    code: '7S',
    image: 'https://deckofcardsapi.com/static/img/7S.png',
    value: '7',
  },
  {
    code: '2H',
    image: 'https://deckofcardsapi.com/static/img/2H.png',
    value: '2',
  },
  {
    code: 'QH',
    image: 'https://deckofcardsapi.com/static/img/QH.png',
    value: 'QUEEN',
  },
  {
    code: '8H',
    image: 'https://deckofcardsapi.com/static/img/8H.png',
    value: '8',
  },
  {
    code: '0S',
    image: 'https://deckofcardsapi.com/static/img/0S.png',
    value: '10',
  },
  {
    code: '0H',
    image: 'https://deckofcardsapi.com/static/img/0H.png',
    value: '10',
  },
  {
    code: '7D',
    image: 'https://deckofcardsapi.com/static/img/7D.png',
    value: '7',
  },
  {
    code: '6C',
    image: 'https://deckofcardsapi.com/static/img/6C.png',
    value: '6',
  },
];
