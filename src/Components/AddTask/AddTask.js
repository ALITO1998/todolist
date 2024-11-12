import React, { useState } from 'react';
import { Box, FormControl, IconButton, Input, InputLabel, Alert } from '@mui/material';

const AddTask = ({ AddTaskHandler, closeModel }) => {
    const [alertEmpty, setAlertEmpty] = useState(false);
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

    const [task, setTask] = useState('');

    const inputHandler = (e) => {
        setAlertEmpty(false);
        const Value = e.target.value;
        setTask(Value);
    }

    return (
        <Box component="form" onSubmit={submitHandler} sx={{ margin: '10px' }}>
            <FormControl sx={{ marginRight: '25px' }} >
                <InputLabel sx={{ fontSize: '28px' }} htmlFor="task">Task</InputLabel>
                <Input id="task" value={task || ""} onChange={inputHandler} placeholder='Enter Your Task' />
                {alertEmpty && <Alert severity="error">Task cannot be empty</Alert>}
            </FormControl>
            <FormControl>
                <IconButton type="submit" >Save</IconButton>
            </FormControl>
        </Box >);
}

export default AddTask