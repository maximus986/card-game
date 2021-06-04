import { Card as CardModel } from 'data/game/cardsDeck';
import React from 'react';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';

export const Player = () => (
  <div>
    <PlayerInfo>
      <PlayerName variant="human">Me</PlayerName>
      <PlayerScore>0</PlayerScore>
    </PlayerInfo>
    <CardsList>
      {mockCards.map((card) => (
        <li key={card.code}>
          <Button onClick={() => console.log(card.code)} type="button">
            <Card image={card.image} />
          </Button>
        </li>
      ))}
    </CardsList>
  </div>
);

const PlayerInfo = styled.div`
  margin-bottom: 24px;
`;

const CardsList = styled.ul`
  display: flex;
`;

const Button = styled.button`
  position: relative;
  transition: all linear 0.2s;
  &:hover {
    bottom: 20px;
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
