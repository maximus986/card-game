export {};
// import { useCallback, useState } from 'react';
// import { Card } from 'data/game/cardsDeck';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from 'store';
// import { setTableCards, setNextPlayer, NextPlayer } from './gameSlice';

// export const usePlay = (
//   playCards: Card[],
//   nextPLayer: NextPlayer,
// ): [(card: Card) => void, Card[]] => {
//   const [cards, setCards] = useState<Card[]>(playCards);
//   const dispatch = useDispatch();

//   const play = useCallback(() => {
//     (card: Card) => {
//       dispatch(setTableCards(card));
//       const afterPlayCards = cards.filter((playedCard) => playedCard.code !== card.code);
//       setCards(afterPlayCards);
//       dispatch(setNextPlayer(nextPLayer));
//     };
//   }, [cards, nextPLayer, dispatch]);

//   return [play, cards];
// };
