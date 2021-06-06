import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsDeck } from 'game/gameSlice';
import { Game } from 'game/Game';
import { GlobalStyle } from 'components/GlobalStyle';
import styled from '@emotion/styled';
import { NumberOfPlayers } from 'game/NumberOfPlayers';
import { RootState } from 'store';
import { Winner } from 'game/Winner';

function App() {
  const gameState = useSelector((state: RootState) => state.game.gameState);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCardsDeck());
  // }, [dispatch]);

  const isRoundOn = gameState === 'start' || gameState === 'roundEnd';

  return (
    <Container>
      <GlobalStyle />
      {gameState === 'initial' ? <NumberOfPlayers /> : null}
      {isRoundOn ? <Game /> : null}
      {gameState === 'end' ? <Winner /> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: #0f3923;
`;

export default App;
