import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Reducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
