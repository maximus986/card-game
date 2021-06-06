import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, CardsDeck } from 'data/game/cardsDeck';
import { gameRepository } from 'data/game/gameRepository';
import { AppThunk } from 'store';

type CardGame = 'initial' | 'start' | 'end';
export type NextPlayer = 'me' | 'bot1' | 'bot2' | 'bot3';

interface GameState {
  cardsDeck: CardsDeck | null;
  numberOfPlayers: number;
  gameState: CardGame;
  tableCards: Card[];
  nextPlayer: NextPlayer;
}

const initialState: GameState = {
  cardsDeck: null,
  numberOfPlayers: 4,
  gameState: 'initial',
  tableCards: [],
  nextPlayer: 'me',
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setCardsDeck(state, { payload }: PayloadAction<CardsDeck>) {
      state.cardsDeck = payload;
    },
    setNumberOfPlayers(state, { payload }: PayloadAction<number>) {
      state.numberOfPlayers = payload;
      state.gameState = 'start';
    },
    setGameState(state, { payload }: PayloadAction<CardGame>) {
      state.gameState = payload;
    },
    setTableCards(state, { payload }: PayloadAction<Card>) {
      state.tableCards.push(payload);
    },
    setNextPlayer(state, { payload }: PayloadAction<NextPlayer>) {
      state.nextPlayer = payload;
    },
  },
});

export const fetchCardsDeck = (): AppThunk => async (dispatch) => {
  try {
    const cardsDeck = await gameRepository.fetchCardsDeck();
    dispatch(setCardsDeck(cardsDeck));
  } catch (error) {
    console.log(error);
  }
};

export const {
  setCardsDeck,
  setNumberOfPlayers,
  setGameState,
  setTableCards,
  setNextPlayer,
} = gameSlice.actions;

export default gameSlice;
