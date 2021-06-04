import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const Game = () => {
  const cardsDeck = useSelector((state: RootState) => state.game.cardsDeck);
  console.log(cardsDeck);

  return <pre>{JSON.stringify(cardsDeck, null, 2)}</pre>;
};
