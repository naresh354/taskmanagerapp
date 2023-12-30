
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../redux/Actions';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { toast } from 'react-toastify';


const TaskList = ({ taskList }: any) => {
  
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState<any>({ id: null, title: '' });

  const handleEdit = (taskId: any, currentTitle: any) => {
    setEditedTask({ id: taskId, title: currentTitle });
  };

  const handleCancelEdit = () => {
    setEditedTask({ id: null, title: '' });
  };

  const handleUpdateTask = () => {
    if (editedTask.title.trim() !== '') {
      dispatch(updateTask(editedTask));
      toast.success("Task Updated")
      setEditedTask({ id: null, title: '' });
    }
  };

  const handleDeleteTask = (taskId: any) => {
    dispatch(deleteTask(taskId));
    toast.warning("Task Deleted")
  };

  return (
    <div className='alignCenter'>
      
        { taskList && taskList?.tasks?.map((task: any) => (
           <Card sx={{ width: "40%", mt:2, backgroundColor: "#ececec"  }}>
          <CardContent key={task.id} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', mt: 1 }}>
          {editedTask.id === task.id ? (
                <div className='alignAround'>
                  <TextField
                    type='text'
                    size='small'
                    label="Edit Task" variant="outlined"
                    value={editedTask.title}
                    onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                  />

                  <Box>
                  <Button sx={{ fontSize: "0.8rem" }} variant='contained' color='success' onClick={handleUpdateTask}>
                    Submit
                  </Button>
                  <Button sx={{ ml: 1, fontSize: "0.8rem" }} variant='contained' onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                  </Box>
                 
                </div>
              ) : (
                <div className='alignAround'>
                  <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <FiberManualRecordIcon sx={{ fontSize: "0.8rem", mr: 1, color: "#8d8d8d" }}></FiberManualRecordIcon>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>{task.title}</Typography>
                  </Box>
                 <Box>
                 <Button sx={{ fontSize: "0.8rem" }} variant='contained' color='error' onClick={() => handleDeleteTask(task.id)}>
                    Delete
                  </Button>
                  <Button sx={{ ml: 1, fontSize: "0.8rem" }} variant='contained' onClick={() => handleEdit(task.id, task.title)}>
                    Edit
                  </Button>
                 </Box>
                </div>
              )}
          </CardContent>
          </Card>
        ))}
     
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { addTask, deleteTask })(TaskList);


