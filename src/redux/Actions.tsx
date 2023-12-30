import { createAction, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: any;
  title: string;
}

export const addTask = createAction<{ id: any; title: string }>('ADD_TASK');
export const deleteTask = createAction<PayloadAction<number>>('DELETE_TASK');
export const updateTask = createAction<{ id: number; title: string }>('UPDATE_TASK');