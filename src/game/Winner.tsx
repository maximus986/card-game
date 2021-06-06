import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Player } from './gameSlice';

const playerIdToPlayerNameMap: Record<Player, string> = {
  me: 'Me',
  bot1: 'Ola',
  bot2: 'Rosetta',
  bot3: 'Carolyn',
};

export const Winner = () => {
  const score = useSelector((state: RootState) => state.game.score);
  const winnerId = score.reduce((prev, curr) =>
    prev.value > curr.value ? prev : curr,
  ).playerId;
  return (
    <div>
      <h1>The winner is: {playerIdToPlayerNameMap[winnerId]} </h1>
    </div>
  );
};
