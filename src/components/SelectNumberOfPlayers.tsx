import { setNumberOfPlayers } from 'game/gameSlice';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './Button';

interface SelectNumberOfPlayersProps {
  label: string;
  numberOfPlayers: number;
}

export const SelectNumberOfPlayers = ({
  label,
  numberOfPlayers,
}: SelectNumberOfPlayersProps) => {
  const dispatch = useDispatch();

  const handleNumberOfPlayers = useCallback(() => {
    dispatch(setNumberOfPlayers(numberOfPlayers));
  }, [numberOfPlayers, dispatch]);

  return <Button onClick={handleNumberOfPlayers}>{label}</Button>;
};
