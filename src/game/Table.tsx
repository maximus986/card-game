import styled from '@emotion/styled';
import { Card } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setGameState, setResult, emptyTableCards } from './gameSlice';

const positionMap: Record<number, React.CSSProperties> = {
  0: {
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  1: {
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  2: {
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  3: {
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

export const Table = () => {
  const cards = useSelector((state: RootState) => state.game.tableCards);
  const numberOfPlayers = useSelector((state: RootState) => state.game.numberOfPlayers);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (cards.length === numberOfPlayers) {
      dispatch(setGameState('roundEnd'));
      timeout = setTimeout(() => {
        dispatch(setResult());
        dispatch(emptyTableCards());
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [numberOfPlayers, dispatch, cards]);

  return (
    <CardsList>
      {cards.map((card, index) => (
        <CardsListItem key={`${card.code}_${index}`} style={positionMap[index]}>
          <Card image={card.image} />
        </CardsListItem>
      ))}
    </CardsList>
  );
};

const CardsList = styled.ul`
  width: 200px;
  height: 100px;
  position: relative;
  @media (min-width: 768px) {
    width: 200px;
    height: 125px;
  }
  @media (min-width: 992px) {
    width: 275px;
    height: 190px;
  }
  @media (min-width: 1280px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 1600px) {
    width: 400px;
    height: 400px;
  }
`;

const CardsListItem = styled.li`
  width: 50px;
  position: absolute;
  @media (min-width: 992px) {
    width: 100px;
  }
`;
