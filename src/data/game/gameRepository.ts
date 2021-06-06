import { gameApi } from 'api/game/gameApi';
import { CardsDeckDto } from 'api/game/shuffleCardsDto';
import { CardsDeck } from './cardsDeck';

const fetchCardsDeck = (): Promise<CardsDeck> =>
  gameApi.fetchCardsDeck().then((deck) => deckNormalizer(deck));

const deckNormalizer = (cardsDeck: CardsDeckDto): CardsDeck => ({
  deckId: cardsDeck.deck_id ?? '',
  cards: cardsDeck.cards.map((card) => ({
    image: card.image ?? '',
    value: normalizeCardValue(card.value) ?? 0,
    code: card.code ?? '',
  })),
  remaining: cardsDeck.remaining ?? '',
});

const normalizeCardValue = (cardValue: string) => {
  switch (cardValue) {
    case 'ACE':
      return 1;
    case 'JACK':
      return 12;
    case 'QUEEN':
      return 13;
    case 'KING':
      return 14;
    default:
      return parseInt(cardValue, 10);
  }
};

export const gameRepository = { fetchCardsDeck };
