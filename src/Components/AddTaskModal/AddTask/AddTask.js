import React, { useState } from 'react';
import { Box, FormControl, IconButton, FormLabel } from '@mui/material';
import Task from '../../Content/Task/Task';
import dayjs from 'dayjs';
import { getExpectedDoneDate, getTitle } from '../../Content/Task/Task';
const AddTask = ({ addTaskHandler, cancel }) => {
    const [alertEmpty, setAlertEmpty] = useState(false);

    const addTaskBtnHandler = (e) => {
        e.preventDefault();
        let task = {};
        task.title = getTitle() ? getTitle() : "";
        task.expectedDoneDate = getExpectedDoneDate() ? getExpectedDoneDate() : "";
        if (task.title === '' || task.title === undefined) {
            setAlertEmpty(true);
        } else {
            if (task.expectedDoneDate === undefined || task.expectedDoneDate === '') {
                task.expectedDoneDate = dayjs();
            }
            task.status = 'not yet';
            addTaskHandler({ task });
            cancel();
        }
    }

    const inputTaskHandler = (e) => {
        setAlertEmpty(false);
    }


    return (
        <Box id='addTaskBox' component="form" onSubmit={addTaskBtnHandler} sx={{ margin: '10px', }}>
            <FormLabel sx={{ fontSize: '32px' }}>Task</FormLabel>

            <Task type='add' errorEmpty={alertEmpty} inputTaskHandler={inputTaskHandler} />

            <FormControl sx={{ margin: '25px', display: 'flex' }}>
                <IconButton type="submit" >Save</IconButton>
            </FormControl>
        </Box >);
}

export default AddTask