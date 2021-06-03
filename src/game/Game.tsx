import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const Game = () => {
  const deckId = useSelector((state: RootState) => state.game.deckId);
  console.log(deckId);

  return <div>Deck</div>;
};
