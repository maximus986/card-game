import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsDeck } from 'game/gameSlice';
import { Game } from 'game/Game';
import { GlobalStyle } from 'components/GlobalStyle';
import styled from '@emotion/styled';
import { NumberOfPlayers } from 'game/NumberOfPlayers';
import { RootState } from 'store';
import { Winner } from 'game/Winner';
import { LoadingIndicator } from 'components';

function App() {
  const gameState = useSelector((state: RootState) => state.game.gameState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardsDeck());
  }, [dispatch]);

  const inPlay = gameState === 'roundStart' || gameState === 'roundEnd';

  return (
    <Container>
      <GlobalStyle />
      <LoadingContainer>
        <LoadingIndicator />
      </LoadingContainer>
      {gameState === 'start' ? <NumberOfPlayers /> : null}
      {inPlay ? <Game /> : null}
      {gameState === 'end' ? <Winner /> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #0f3923;
  @media (min-width: 992px) {
    padding: 50px;
  }
`;

const LoadingContainer = styled.div`
  width: 40px;
  height: 40px;
  align-self: center;
`;

export default App;
