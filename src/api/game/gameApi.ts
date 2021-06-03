import axios from 'axios';
import { ShuffleCardsDeckDto } from './shuffleCardsDto';
import { DECK_OF_CARDS_API_BASE_URL } from '../../environment';

const shuffleCardsDeck = (): Promise<ShuffleCardsDeckDto> =>
  axios
    .get(`${DECK_OF_CARDS_API_BASE_URL}/new/shuffle/?deck_count=1`)
    .then((response) => Promise.resolve(response.data));

export const gameApi = { shuffleCardsDeck };
