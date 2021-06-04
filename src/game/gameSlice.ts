import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardsDeck } from 'data/game/cardsDeck';
import { gameRepository } from 'data/game/gameRepository';
import { AppThunk } from 'store';

type CardGame = 'initial' | 'start' | 'end';

interface GameState {
  cardsDeck: CardsDeck | null;
  numberOfPlayers: number;
  gameState: CardGame;
}

const initialState: GameState = {
  cardsDeck: null,
  numberOfPlayers: 4,
  gameState: 'initial',
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

export const { setCardsDeck, setNumberOfPlayers, setGameState } = gameSlice.actions;

export default gameSlice;
