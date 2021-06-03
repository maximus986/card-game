import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { setDeckId, shuffleCardsDeck } from 'game/gameSlice';
import { Game } from 'game/Game';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shuffleCardsDeck());
  }, [dispatch]);

  return <Game />;
}

export default App;
