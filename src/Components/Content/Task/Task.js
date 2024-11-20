import { Input, InputLabel, ListItemText } from '@mui/material'
import React, { Fragment } from 'react'

const Task = ({ task, type, inputTaskHandler }) => {
    if (type === 'add') {
        return <TaskAdded inputTaskHandler={inputTaskHandler} task={task} />;
    } else if (type === 'show') {
        return <TaskShow task={task} />
    }
}

const TaskShow = ({ task }) => {

    return <ListItemText primary={task.title} sx={task.status === 'done' ? { textDecorationLine: 'line-through' } : {}} />
}


const TaskAdded = ({ inputTaskHandler, task }) => {
    return (<Fragment>
        <InputLabel sx={{ fontSize: '28px' }} htmlFor="task">Title</InputLabel>
        <Input name='title' id="task" value={task.title || ""} onChange={inputTaskHandler} placeholder='Enter Your Task Title...' />
    </Fragment>
    )
}

export default Task
