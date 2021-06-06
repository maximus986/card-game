import { startGame } from 'game/gameSlice';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Button } from './Button';

interface SelectNumberOfPlayersProps {
  label: string;
  numberOfPlayers: number;
}

export const SelectNumberOfPlayers = ({
  label,
  numberOfPlayers,
}: SelectNumberOfPlayersProps) => {
  const loadingCards = useSelector((state: RootState) => state.game.loadingCards);
  const dispatch = useDispatch();

  const handleNumberOfPlayers = useCallback(() => {
    dispatch(startGame(numberOfPlayers));
  }, [numberOfPlayers, dispatch]);

  return (
    <Button onClick={handleNumberOfPlayers} isDisabled={loadingCards}>
      {label}
    </Button>
  );
};
