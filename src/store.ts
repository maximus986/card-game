import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import gameSlice from './game/gameSlice';

export const rootReducer = combineReducers({
  game: gameSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
