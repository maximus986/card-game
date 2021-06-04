export interface CardsDeckDto {
  success: boolean;
  deck_id: string;
  remaining: number;
  cards: CardDto[];
}

interface CardDto {
  image: string;
  value: string;
  suit: string;
  code: string;
}
