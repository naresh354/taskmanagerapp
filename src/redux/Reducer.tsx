import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addTask, deleteTask, updateTask, Task } from './Actions';

interface InitialState {
  [x: string]: any;
  tasks: Task[];
}

const initialState: InitialState = {
  tasks: [],
};
const taskReducer = createReducer(initialState, (builder: any) => {
  builder
    .addCase(addTask, (state: any, action: PayloadAction<{ id: any; title: string }>) => {
      state.tasks.push(action.payload);
    })
    .addCase(updateTask, (state: any, action: PayloadAction<{ id: number; title: string }>) => {
      const index = state.tasks.findIndex((task: any) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    })
    .addCase(deleteTask, (state: any, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task: any) => task.id !== action.payload);
    });
});

export default taskReducer;
