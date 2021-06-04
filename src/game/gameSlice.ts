import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardsDeck } from 'data/game/cardsDeck';
import { gameRepository } from 'data/game/gameRepository';
import { AppThunk } from 'store';

interface GameState {
  cardsDeck: CardsDeck | null;
}

const initialState: GameState = { cardsDeck: null };

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setCardsDeck(state, { payload }: PayloadAction<CardsDeck>) {
      state.cardsDeck = payload;
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

export const { setCardsDeck } = gameSlice.actions;

export default gameSlice;
