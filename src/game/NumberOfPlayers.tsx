import styled from '@emotion/styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setNumberOfPlayers } from './gameSlice';

export const NumberOfPlayers = () => {
  const gameState = useSelector((state: RootState) => state.game.gameState);
  const dispatch = useDispatch();
  if (gameState !== 'initial') {
    return null;
  }
  return (
    <Container>
      <div
        style={{
          width: '500px',
          height: '500px',
          background: '#6DB06D',
          padding: '50px',
        }}
      >
        <button type="button" onClick={() => dispatch(setNumberOfPlayers(2))}>
          Two Players
        </button>
        <button type="button" onClick={() => dispatch(setNumberOfPlayers(3))}>
          Three Players
        </button>
        <button type="button" onClick={() => dispatch(setNumberOfPlayers(4))}>
          Four Players
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
