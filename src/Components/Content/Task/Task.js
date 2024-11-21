import { FormControl, Input, InputLabel, ListItemText, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DateField, DatePicker } from '@mui/x-date-pickers';

const Task = ({ task, type, inputTaskHandler }) => {
    if (type === 'add') {
        return <TaskAdded inputTaskHandler={inputTaskHandler} task={task} />;
    } else if (type === 'show') {
        return <TaskShow task={task} />
    }
}

const TaskShow = ({ task }) => {
    const date = new Date(task.expectedDoneDate.$d);
    return <Fragment>
        <ListItemText
            primary={task.title}
            secondary={"Task end date: " + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()}
            sx={task.status === 'done' ? { textDecorationLine: 'line-through' } : {}} />
    </Fragment>
}


const TaskAdded = ({ inputTaskHandler, task }) => {
    return (<Fragment>
        <FormControl sx={{ marginRight: '25px' }} >
            <InputLabel sx={{ fontSize: '28px' }} htmlFor="title">Title</InputLabel>
            <Input id="title" value={task.title || ""} onChange={inputTaskHandler} placeholder='Enter Your Task Title...' />
        </FormControl>
        <FormControl>
            {/* <Typography sx={{ fontSize: '28px', padding: '5px' }} htmlFor="expectedDoneDate">Expected Done Date</Typography> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Expected Done Date' id='expectedDoneDate' value={task.expectedDoneDate || dayjs()} onChange={(e) => { inputTaskHandler(e) }} />
            </LocalizationProvider>
        </FormControl>
    </Fragment>
    )
}

export default Task
