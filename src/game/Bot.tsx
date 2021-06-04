import { Card } from 'data/game/cardsDeck';
import React from 'react';
import cardBack from '../images/card-back.jpg';
import styled from '@emotion/styled';
import { PlayerName, PlayerScore } from 'components';

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
          <Figure>
            <img src={cardBack} alt="" />
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
  position: relative;
  height: 160px;
  width: 551px;
`;

const CardsListItem = styled.li`
  position: absolute;
`;

const Figure = styled.figure`
  width: 100px;
`;

const mockCards: Pick<Card, 'code' | 'value'>[] = [
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
