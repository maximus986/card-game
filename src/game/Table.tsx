import styled from '@emotion/styled';
import { Card } from 'data/game/cardsDeck';
import React from 'react';

interface TableProps {
  cards: Card[];
}

const positionMap: Record<number, React.CSSProperties> = {
  0: {
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  1: {
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  2: {
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  3: {
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

export const Table = ({ cards }: TableProps) => (
  <CardsList>
    {cards.map((card, index) => (
      <CardsListItem key={card.code} style={positionMap[index]}>
        <figure>
          <img src={card.image} alt="" />
        </figure>
      </CardsListItem>
    ))}
  </CardsList>
);

const CardsList = styled.ul`
  width: 400px;
  height: 400px;
  background: cyan;
  position: relative;
`;

const CardsListItem = styled.li`
  width: 100px;
  position: absolute;
`;
