import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchCardsDeck } from 'game/gameSlice';
import { Game } from 'game/Game';
import { GlobalStyle } from 'components/GlobalStyle';
import styled from '@emotion/styled';
import { NumberOfPlayers } from 'game/NumberOfPlayers';

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCardsDeck());
  // }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <NumberOfPlayers />
      <Game />
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
