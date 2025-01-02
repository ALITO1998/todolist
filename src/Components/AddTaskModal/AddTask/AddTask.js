import React from 'react';
import { Box, FormControl, IconButton, Alert, FormLabel } from '@mui/material';
import Task from '../../Content/Task/Task';

const AddTask = ({ addTaskBtnHandler, alertEmpty, inputTaskHandler, task }) => {

    return (
        <Box id='addTaskBox' component="form" onSubmit={addTaskBtnHandler} sx={{ margin: '10px', }}>
            <FormLabel sx={{ fontSize: '32px' }}>Task</FormLabel>
            <FormControl sx={{ margin: '10px', display: 'flex' }} >
                {alertEmpty && <Alert severity="error" sx={{ mb: '5px' }}>Task cannot be empty</Alert>}
            </FormControl>

            <Task type='add' inputTaskHandler={inputTaskHandler} task={task} />

            <FormControl sx={{ margin: '25px', display: 'flex' }}>
                <IconButton type="submit" >Save</IconButton>
            </FormControl>
        </Box >);
}

export default AddTask