import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, CardsDeck } from 'data/game/cardsDeck';
import { gameRepository } from 'data/game/gameRepository';
import { AppThunk } from 'store';
import { chunk, range } from 'lodash';

type CardGame = 'initial' | 'start' | 'roundEnd' | 'end';
export type Player = 'me' | 'bot1' | 'bot2' | 'bot3';
interface TableCards extends Card {
  playerId: Player;
}
interface Score {
  value: number;
  playerId: Player;
}

interface PlayerCard {
  playerId: Player;
  cards: Card[];
}

interface GameState {
  cardsDeck: CardsDeck | null;
  numberOfPlayers: number;
  gameState: CardGame;
  tableCards: TableCards[];
  nextPlayer: Player;
  score: Score[];
  playerCards: PlayerCard[];
  loadingCards: boolean;
}

const initialState: GameState = {
  cardsDeck: null,
  numberOfPlayers: 0,
  gameState: 'initial',
  tableCards: [],
  nextPlayer: 'me',
  score: [],
  playerCards: [],
  loadingCards: true,
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
      range(0, payload).forEach((i) => {
        if (i === 0) {
          state.score.push({ playerId: 'me', value: 0 });
        } else {
          state.score.push({ playerId: `bot${i}` as Player, value: 0 });
        }
      });
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
    setNextPlayer(state, { payload }: PayloadAction<Player>) {
      state.nextPlayer = payload;
    },
    setScore(state, { payload }: PayloadAction<Score>) {
      state.score = state.score.map((item) =>
        item.playerId === payload.playerId ? { ...item, value: payload.value } : item,
      );
    },
    setPlayerCards(state, { payload }: PayloadAction<PlayerCard>) {
      state.playerCards.push(payload);
    },
    setLoadingCards(state, { payload }: PayloadAction<boolean>) {
      state.loadingCards = payload;
    },
  },
});

export const fetchCardsDeck = (): AppThunk => async (dispatch) => {
  try {
    const cardsDeck = await gameRepository.fetchCardsDeck();
    dispatch(setCardsDeck(cardsDeck));
    dispatch(setLoadingCards(false));
  } catch (error) {
    dispatch(setLoadingCards(false));
    alert(`Fetching cards failed. Please try again. Reason: ${error.message}`);
  }
};

export const setResult = (): AppThunk => (dispatch, getState) => {
  const { tableCards } = getState().game;
  const { score } = getState().game;
  const roundWinner = tableCards.reduce((prev, curr) =>
    prev.value > curr.value ? prev : curr,
  );
  const roundScore = tableCards.reduce((sum, current) => sum + current.value, 0);
  const totalScore =
    roundScore + score.find((item) => item.playerId === roundWinner.playerId)?.value!;
  dispatch(setScore({ value: totalScore, playerId: roundWinner.playerId }));
};

export const dealCards = (): AppThunk => (dispatch, getState) => {
  const cards = getState().game.cardsDeck?.cards ?? [];
  const numberOfCards = 10;
  const piles = chunk(cards, numberOfCards);
  piles.forEach((pile, index) => {
    if (index === 0) {
      dispatch(setPlayerCards({ cards: pile, playerId: 'me' as Player }));
    } else {
      dispatch(setPlayerCards({ cards: pile, playerId: `bot${index}` as Player }));
    }
  });
};

export const startGame =
  (numberOfPlayers: number): AppThunk =>
  (dispatch) => {
    dispatch(setNumberOfPlayers(numberOfPlayers));
    dispatch(setGameState('start'));
    dispatch(dealCards());
  };

export const {
  setCardsDeck,
  setNumberOfPlayers,
  setGameState,
  setTableCards,
  setNextPlayer,
  setScore,
  emptyTableCards,
  setPlayerCards,
  setLoadingCards,
} = gameSlice.actions;

export default gameSlice;
