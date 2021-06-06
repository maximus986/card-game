import { useCallback, useState } from 'react';
import { Card } from 'data/game/cardsDeck';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setTableCards, setNextPlayer, Player } from './gameSlice';

export const usePlay = (
  player: Player,
  nextPLayer: Player,
): [(card: Card) => void, Card[]] => {
  const playerCards = useSelector((state: RootState) => state.game.playerCards);
  const [cards, setCards] = useState<Card[]>(
    () => playerCards.find((item) => item.playerId === player)?.cards ?? [],
  );
  const dispatch = useDispatch();

  const play = useCallback(
    (card: Card) => {
      dispatch(setTableCards({ ...card, playerId: player }));
      const afterPlayCards = cards.filter((playedCard) => playedCard.code !== card.code);
      setCards(afterPlayCards);
      dispatch(setNextPlayer(nextPLayer));
    },
    [cards, nextPLayer],
  );

  return [play, cards];
};
