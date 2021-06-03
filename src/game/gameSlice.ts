import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gameRepository } from 'data/game/gameRepository';
import { AppThunk } from 'store';

interface GameState {
  deckId: string;
}

const initialState: GameState = { deckId: '' };

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setDeckId(state, { payload }: PayloadAction<string>) {
      state.deckId = payload;
    },
  },
});

export const shuffleCardsDeck = (): AppThunk => async (dispatch) => {
  try {
    const deck = await gameRepository.shuffleCardsDeck();
    dispatch(setDeckId(deck.deckId));
  } catch (error) {
    console.log(error);
  }
};

export const { setDeckId } = gameSlice.actions;

export default gameSlice;
