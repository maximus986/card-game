import { Card as CardModel } from 'data/game/cardsDeck';
import React from 'react';
import cardBack from '../images/card-back.jpg';
import styled from '@emotion/styled';
import { Card, PlayerName, PlayerScore } from 'components';

interface BotProps {
  name: string;
}

export const Bot = ({ name }: BotProps) => (
  <div>
    <PlayerInfo>
      <PlayerName>{name}</PlayerName>
      <PlayerScore>0</PlayerScore>
    </PlayerInfo>
    <CardsList>
      {mockCards.map((card, index) => (
        <CardsListItem key={card.code} style={{ left: `${index * 50}px`, zIndex: index }}>
          <Card image={cardBack} />
        </CardsListItem>
      ))}
    </CardsList>
  </div>
);

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

const Figure = styled.figure`
  width: 100px;
`;

const mockCards: Pick<CardModel, 'code' | 'value'>[] = [
  {
    code: 'AS',
    value: 'ACE',
  },
  {
    code: '5H',
    value: '5',
  },
  {
    code: 'KS',
    value: '14',
  },
  {
    code: '7S',
    value: '7',
  },
  {
    code: '2S',
    value: '2',
  },
  {
    code: 'QH',
    value: '13',
  },
  {
    code: '6C',
    value: '6',
  },
  {
    code: 'JC',
    value: '12',
  },
  {
    code: '5D',
    value: '5',
  },
  {
    code: '0C',
    value: '10',
  },
];
