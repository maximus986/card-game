import { gameApi } from 'api/game/gameApi';
import { CardsDeck } from './cardsDeck';

const fetchCardsDeck = (): Promise<CardsDeck> =>
  gameApi.fetchCardsDeck().then((deck) => ({
    deckId: deck.deck_id,
    cards: deck.cards,
    remaining: deck.remaining,
  }));

export const gameRepository = { fetchCardsDeck };
