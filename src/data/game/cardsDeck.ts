export interface CardsDeck {
  deckId: string;
  remaining: number;
  cards: Card[];
}

export interface Card {
  image: string;
  value: number;
  code: string;
}
