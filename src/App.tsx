import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsDeck } from 'game/gameSlice';
import { Game } from 'game/Game';
import { GlobalStyle } from 'components/GlobalStyle';
import styled from '@emotion/styled';
import { NumberOfPlayers } from 'game/NumberOfPlayers';
import { RootState } from 'store';
import { Winner } from 'game/Winner';
import Loader from 'react-loader-spinner';

function App() {
  const gameState = useSelector((state: RootState) => state.game.gameState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardsDeck());
  }, [dispatch]);

  const isRoundOn = gameState === 'start' || gameState === 'roundEnd';

  return (
    <Container>
      <GlobalStyle />
      <Loading />
      {gameState === 'initial' ? <NumberOfPlayers /> : null}
      {isRoundOn ? <Game /> : null}
      {gameState === 'end' ? <Winner /> : null}
    </Container>
  );
}

const Loading = () => {
  const loadingCards = useSelector((state: RootState) => state.game.loadingCards);
  return (
    <>
      {loadingCards ? (
        <LoaderContainer>
          <Loader type="Bars" color="#ffc400" height={100} width={100} />
        </LoaderContainer>
      ) : null}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: #0f3923;
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
