import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer } from './reducer';

const store = configureStore({
  reducer: { reducer },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
