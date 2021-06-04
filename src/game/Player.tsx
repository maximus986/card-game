import { Card } from 'data/game/cardsDeck';
import React from 'react';
import styled from '@emotion/styled';
import { PlayerName, PlayerScore } from 'components';

export const Player = () => (
  <div>
    <PlayerInfo>
      <PlayerName>Player</PlayerName>
      <PlayerScore>0</PlayerScore>
    </PlayerInfo>
    <CardsList>
      {mockCards.map((card) => (
        <CardsListItem key={card.code} onClick={() => console.log(card.code)}>
          <Figure>
            <img src={card.image} alt="" />
          </Figure>
        </CardsListItem>
      ))}
    </CardsList>
  </div>
);

const PlayerInfo = styled.div`
  margin-bottom: 16px;
`;

const CardsList = styled.ul`
  display: flex;
`;

const CardsListItem = styled.li``;

const Figure = styled.figure`
  width: 100px;
`;

const mockCards: Card[] = [
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
