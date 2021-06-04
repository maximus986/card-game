import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchCardsDeck } from 'game/gameSlice';
import { Game } from 'game/Game';
import { GlobalStyle } from 'components/GlobalStyle';

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCardsDeck());
  // }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Game />
    </>
  );
}

export default App;
