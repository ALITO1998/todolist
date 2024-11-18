import React from 'react';
import { Box, FormControl, IconButton, Alert } from '@mui/material';
import Task from '../../Content/Task/Task';

const AddTask = ({ AddTaskHandler, submitHandler, alertEmpty, inputHandler }) => {
    /* const [alertEmpty, setAlertEmpty] = useState(false);
    const [task, setTask] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (task === '') {
            setAlertEmpty(true);
        } else {
            const id = Date.now();
            AddTaskHandler({ id, task });
            setTask('');
            closeModel();
        }
    }

    const inputHandler = (Value) => {
        setAlertEmpty(false);
        setTask(Value);
    } */

    return (
        <Box id='addTaskBox' component="form" onSubmit={submitHandler} sx={{ margin: '10px', }}>
            <FormControl sx={{ marginRight: '25px', display: 'flex' }} >
                {alertEmpty && <Alert severity="error" sx={{ mb: '5px' }}>Task cannot be empty</Alert>}
            </FormControl>
            <FormControl sx={{ marginRight: '25px' }} >
                <Task type='add' inputHandler={inputHandler} />
            </FormControl>
            <FormControl>
                <IconButton type="submit" >Save</IconButton>
            </FormControl>
        </Box >);
}

export default AddTask