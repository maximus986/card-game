export interface CardsDeck {
  deckId: string;
  remaining: number;
  cards: Card[];
}

export interface Card {
  image: string;
  value: string;
  code: string;
}
