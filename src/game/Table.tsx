import styled from '@emotion/styled';
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

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (cards.length === numberOfPlayers) {
      dispatch(setGameState('roundEnd'));
      const timeout = setTimeout(() => {
        dispatch(setResult());
        dispatch(emptyTableCards());
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [numberOfPlayers, dispatch, cards]);

  return (
    <CardsList>
      {cards.map((card, index) => (
        <CardsListItem key={`${card.code}_${index}`} style={positionMap[index]}>
          <figure>
            <img src={card.image} alt="" />
          </figure>
        </CardsListItem>
      ))}
    </CardsList>
  );
};

const CardsList = styled.ul`
  width: 400px;
  height: 400px;
  position: relative;
`;

const CardsListItem = styled.li`
  width: 100px;
  position: absolute;
`;
