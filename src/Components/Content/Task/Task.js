import { Alert, FormControl, ListItemText, TextField } from '@mui/material'
import React, { Fragment } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';

const Task = ({ task, type, inputTaskHandler, errorEmpty }) => {
    if (type === 'add') {
        return <TaskAdded inputTaskHandler={inputTaskHandler} errorEmpty={errorEmpty} />;
    } else if (type === 'show') {
        return <TaskShow task={task} />
    }
}

const TaskShow = ({ task }) => {
    const date = new Date(task.expectedDoneDate);
    return (<Fragment>
        <ListItemText
            primary={task.title}
            secondary={"Task end date: " + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()}
            sx={task.status === 'done' ? { textDecorationLine: 'line-through' } : {}} />
        {task.status === 'not yet' && date < new Date() ? <Alert severity="warning">Late</Alert> : <></>}
    </Fragment>);
}


const TaskAdded = ({ inputTaskHandler, errorEmpty }) => {


    return (<Fragment>
        <FormControl sx={{ margin: '25px', display: 'flex', marginTop: "0px" }} >
            <TextField
                label={"Title"}
                variant="standard"
                id="addTaskTitle"
                placeholder='Enter Your Task Title...'
                onChange={inputTaskHandler}
                error={errorEmpty}
                helperText={errorEmpty ? 'Task Title is empty' : ""}
            />
        </FormControl>
        <FormControl sx={{ margin: '25px', display: 'flex' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label='Expected Done Date'
                    /* id='addTaskExpectedDoneDate' */
                    onChange={inputTaskHandler}
                    slotProps={{
                        textField: {
                            id: 'addTaskExpectedDoneDate',
                        },
                    }}
                    defaultValue={dayjs()}
                />
            </LocalizationProvider>
        </FormControl>
    </Fragment>
    )
}

export const getTitle = () => {
    return document.getElementById('addTaskTitle').value;
}
export const getExpectedDoneDate = () => {
    return dayjs(document.getElementById('addTaskExpectedDoneDate').value);
}

export default Task
