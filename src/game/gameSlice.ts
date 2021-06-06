import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, CardsDeck } from 'data/game/cardsDeck';
import { gameRepository } from 'data/game/gameRepository';
import { AppThunk } from 'store';

type CardGame = 'initial' | 'start' | 'roundEnd' | 'end';
export type NextPlayer = 'me' | 'bot1' | 'bot2' | 'bot3';
interface TableCards extends Card {
  playerId: NextPlayer; // TODO: Change interface to Player
}
interface Score {
  value: number;
  playerId: NextPlayer;
}

interface GameState {
  cardsDeck: CardsDeck | null;
  numberOfPlayers: number;
  gameState: CardGame;
  tableCards: TableCards[];
  nextPlayer: NextPlayer;
  score: Score[];
}

const initialState: GameState = {
  cardsDeck: null,
  numberOfPlayers: 4,
  gameState: 'initial',
  tableCards: [],
  nextPlayer: 'me',
  score: [
    { playerId: 'me', value: 0 },
    { playerId: 'bot1', value: 0 },
    { playerId: 'bot2', value: 0 },
    { playerId: 'bot3', value: 0 },
  ],
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
    setTableCards(state, { payload }: PayloadAction<TableCards>) {
      state.tableCards.push(payload);
    },
    emptyTableCards(state) {
      state.tableCards = [];
    },
    setNextPlayer(state, { payload }: PayloadAction<NextPlayer>) {
      state.nextPlayer = payload;
    },
    setScore(state, { payload }: PayloadAction<Score>) {
      state.score = state.score.map((item) =>
        item.playerId === payload.playerId ? { ...item, value: payload.value } : item,
      );
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

export const setResult = (): AppThunk => async (dispatch, getState) => {
  const { tableCards } = getState().game;
  const { score } = getState().game;
  const winner = tableCards.reduce((prev, curr) =>
    prev.value > curr.value ? prev : curr,
  );
  const roundScore = tableCards.reduce((sum, current) => sum + current.value, 0);
  const totalScore =
    roundScore + score.find((item) => item.playerId === winner.playerId)?.value!;
  dispatch(setScore({ value: totalScore, playerId: winner.playerId }));
};

export const {
  setCardsDeck,
  setNumberOfPlayers,
  setGameState,
  setTableCards,
  setNextPlayer,
  setScore,
  emptyTableCards,
} = gameSlice.actions;

export default gameSlice;
