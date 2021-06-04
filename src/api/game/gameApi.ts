import axios from 'axios';
import { CardsDeckDto } from './shuffleCardsDto';
import { DECK_OF_CARDS_API_BASE_URL } from '../../environment';

const fetchCardsDeck = (): Promise<CardsDeckDto> =>
  axios
    .get(`${DECK_OF_CARDS_API_BASE_URL}/new/draw/?count=40`)
    .then((response) => Promise.resolve(response.data));

export const gameApi = { fetchCardsDeck };
