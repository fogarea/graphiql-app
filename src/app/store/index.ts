import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user';

export const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
