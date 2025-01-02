import { Alert, FormControl, Input, InputLabel, ListItemText } from '@mui/material'
import React, { Fragment } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';

const Task = ({ task, type, inputTaskHandler }) => {
    if (type === 'add') {
        return <TaskAdded inputTaskHandler={inputTaskHandler} task={task} />;
    } else if (type === 'show') {
        return <TaskShow task={task} />
    }
}

const TaskShow = ({ task }) => {
    const date = new Date(task.expectedDoneDate.$d);
    return (<Fragment>
        <ListItemText
            primary={task.title}
            secondary={"Task end date: " + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()}
            sx={task.status === 'done' ? { textDecorationLine: 'line-through' } : {}} />
        {task.status === 'not yet' && date < new Date() ? <Alert severity="warning">Late</Alert> : <></>}
    </Fragment>);
}


const TaskAdded = ({ inputTaskHandler, task }) => {
    return (<Fragment>
        <FormControl sx={{ margin: '25px', display: 'flex', marginTop: "0px" }} >
            <InputLabel sx={{ fontSize: '28px' }} htmlFor="title">Title</InputLabel>
            <Input id="title" value={task.title || ""} onChange={inputTaskHandler} placeholder='Enter Your Task Title...' />
        </FormControl>
        <FormControl sx={{ margin: '25px', display: 'flex' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Expected Done Date' id='expectedDoneDate' value={task.expectedDoneDate || dayjs()} onChange={(e) => { inputTaskHandler(e) }} />
            </LocalizationProvider>
        </FormControl>
    </Fragment>
    )
}

export default Task
