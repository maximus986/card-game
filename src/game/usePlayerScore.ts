import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Player } from './gameSlice';

export const usePlayerScore = (player: Player) => {
  const score = useSelector((state: RootState) => state.game.score);
  return score.find((item) => item.playerId === player)?.value;
};
