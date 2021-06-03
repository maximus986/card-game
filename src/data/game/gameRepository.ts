import { gameApi } from 'api/game/gameApi';
import { Deck } from './deck';

const shuffleCardsDeck = (): Promise<Deck> =>
  gameApi.shuffleCardsDeck().then((deck) => ({ deckId: deck.deck_id }));

export const gameRepository = { shuffleCardsDeck };
