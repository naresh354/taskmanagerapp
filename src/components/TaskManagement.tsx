import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/Actions';
import { RootState } from '../redux/RootReducer';
import { Box, Button, TextField } from '@mui/material';
import TaskList from './TaskList';
import { toast } from 'react-toastify';

export interface Task {
  id: number; 
  title: string;
}

const TaskManagement = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ id: Date.now(), title: newTask }));
      toast.success("Task Added")
      setNewTask('');
    }
  };

  return (
    <div className='alignCenter'>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 6  }}>
        <TextField
          type="text"
          size='small'
          label="Add Task" variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant='contained' onClick={handleAddTask} sx={{ ml: 2 }} >Add Task</Button>
      </Box>

      <TaskList taskList={tasks} ></TaskList>

     
    </div>
  );
};

export default TaskManagement;
