import {
  setCardsDeck,
  setNumberOfPlayers,
  initializeScore,
  setGameState,
  setTableCards,
  emptyTableCards,
  setNextPlayer,
  setScore,
  setPlayerCards,
  setLoadingCards,
  Player,
  CardGame,
  NumberOfPlayersRange,
  Score,
  TableCards,
  PlayerCard,
} from '../game/gameSlice';
import { store } from 'store';
import { CardsDeck } from 'data/game/cardsDeck';

describe('game slice', () => {
  it('setCardsDeck reducer should return new cards deck', () => {
    const payload: CardsDeck = mockCardsDeck;
    const expectedAction = {
      type: 'gameSlice/setCardsDeck',
      payload,
    };
    expect(store.dispatch(setCardsDeck(payload))).toEqual(expectedAction);
    expect(store.getState().game.cardsDeck).toEqual(payload);
  });
  it('setNumberOfPlayers reducer should return new number of players', () => {
    const payload: NumberOfPlayersRange = 4;
    const expectedAction = {
      type: 'gameSlice/setNumberOfPlayers',
      payload,
    };
    expect(store.dispatch(setNumberOfPlayers(payload))).toEqual(expectedAction);
    expect(store.getState().game.numberOfPlayers).toEqual(payload);
  });
  it('initializeScore reducer should return initialized score board', () => {
    const expectedAction = {
      type: 'gameSlice/initializeScore',
      payload: undefined,
    };
    store.dispatch(setNumberOfPlayers(2));
    expect(store.dispatch(initializeScore())).toEqual(expectedAction);
    expect(store.getState().game.score).toEqual(mockState);
  });
  it('setGameState reducer should return new state', () => {
    const payload: CardGame = 'roundEnd';
    const expectedAction = {
      type: 'gameSlice/setGameState',
      payload,
    };
    expect(store.dispatch(setGameState(payload))).toEqual(expectedAction);
    expect(store.getState().game.gameState).toEqual(payload);
  });
  it('setTableCards reducer should return table cards state', () => {
    const payload: TableCards = mockTableCards;
    const expectedAction = {
      type: 'gameSlice/setTableCards',
      payload,
    };
    expect(store.dispatch(setTableCards(payload))).toEqual(expectedAction);
    expect(store.getState().game.tableCards).toEqual([payload]);
  });
  it('emptyTableCards reducer should return empty table cards', () => {
    const expectedAction = {
      type: 'gameSlice/emptyTableCards',
      payload: undefined,
    };
    expect(store.dispatch(emptyTableCards())).toEqual(expectedAction);
    expect(store.getState().game.tableCards).toEqual([]);
  });
  it('setNextPlayer reducer should return new player id', () => {
    const payload: Player = 'bot1';
    const expectedAction = {
      type: 'gameSlice/setNextPlayer',
      payload,
    };
    expect(store.dispatch(setNextPlayer(payload))).toEqual(expectedAction);
    expect(store.getState().game.nextPlayer).toEqual(payload);
  });
  it('setScore reducer should return new score state', () => {
    // Number of players = 2;
    const payload: Score = mockScore;
    const expectedAction = {
      type: 'gameSlice/setScore',
      payload,
    };
    expect(store.dispatch(setScore(mockScore))).toEqual(expectedAction);
    expect(store.getState().game.score).toEqual([
      { ...payload },
      { playerId: 'bot1', value: 0 },
    ]);
  });
  it('setPlayerCards reducer should return new player cards state', () => {
    const payload: PlayerCard = mockPlayerCards;
    const expectedAction = {
      type: 'gameSlice/setPlayerCards',
      payload,
    };
    expect(store.dispatch(setPlayerCards(mockPlayerCards))).toEqual(expectedAction);
    expect(store.getState().game.playerCards).toEqual([payload]);
  });
  it('setLoadingCards reducer should return loading cards state', () => {
    const payload: boolean = false;
    const expectedAction = {
      type: 'gameSlice/setLoadingCards',
      payload,
    };
    expect(store.dispatch(setLoadingCards(payload))).toEqual(expectedAction);
    expect(store.getState().game.loadingCards).toBeFalsy();
  });
});

const mockCardsDeck: CardsDeck = {
  deckId: '1',
  remaining: 10,
  cards: [
    {
      code: '3C',
      image: 'https://deckofcardsapi.com/static/img/3C.png',
      value: 3,
    },
  ],
};

const mockState: Score[] = [
  {
    playerId: 'me',
    value: 0,
  },
  {
    playerId: 'bot1',
    value: 0,
  },
];

const mockScore: Score = {
  playerId: 'me',
  value: 20,
};

const mockTableCards: TableCards = {
  code: 'AS',
  image: 'https://deckofcardsapi.com/static/img/AS.png',
  playerId: 'me',
  value: 1,
};

const mockPlayerCards: PlayerCard = {
  playerId: 'me',
  cards: [
    { code: '3C', image: 'https://deckofcardsapi.com/static/img/3C.png', value: 3 },
  ],
};
