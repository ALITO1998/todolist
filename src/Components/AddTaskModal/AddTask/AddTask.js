import React from 'react';
import { Box, FormControl, IconButton, Alert } from '@mui/material';
import Task from '../../Content/Task/Task';

const AddTask = ({ submitHandler, alertEmpty, inputTaskHandler, task }) => {

    return (
        <Box id='addTaskBox' component="form" onSubmit={submitHandler} sx={{ margin: '10px', }}>
            <FormControl sx={{ marginRight: '25px', display: 'flex' }} >
                {alertEmpty && <Alert severity="error" sx={{ mb: '5px' }}>Task cannot be empty</Alert>}
            </FormControl>
            <FormControl sx={{ marginRight: '25px' }} >
                <Task type='add' inputTaskHandler={inputTaskHandler} task={task} />
            </FormControl>
            <FormControl>
                <IconButton type="submit" >Save</IconButton>
            </FormControl>
        </Box >);
}

export default AddTask