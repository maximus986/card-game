import { gameApi } from 'api/game/gameApi';
import { CardsDeckDto } from 'api/game/shuffleCardsDto';
import { CardsDeck } from './cardsDeck';

const fetchCardsDeck = (): Promise<CardsDeck> =>
  gameApi.fetchCardsDeck().then((deck) => deckNormalizer(deck));

const deckNormalizer = (cardsDeck: CardsDeckDto): CardsDeck => ({
  deckId: cardsDeck.deck_id ?? '',
  cards: cardsDeck.cards.map((card) => ({
    image: card.image ?? '',
    value: card.value ?? '',
    code: card.code ?? '',
  })),
  remaining: cardsDeck.remaining ?? '',
});

export const gameRepository = { fetchCardsDeck };
