import { Input, InputLabel, ListItemText } from '@mui/material'
import React, { Fragment, useState } from 'react'

const Task = ({ task, type, inputHandler }) => {
    if (type === 'add') {
        return <TaskAdded inputHandler={inputHandler} />;
    } else if (type === 'show') {
        return <TaskShow task={task} />
    }
}

const TaskShow = ({ task }) => {

    return <ListItemText primary={task.task} sx={task.status === 'done' ? { textDecorationLine: 'line-through' } : {}} />
}


const TaskAdded = ({ inputHandler }) => {
    const [task, setTask] = useState('');
    const onTyping = (e) => {
        const recordTask = () => setTimeout(() => inputHandler(e.target.value), 1000);
        recordTask();
        inputHandler(e.target.value);
        setTask(e.target.value);
        return clearTimeout(recordTask);
    }

    return (<Fragment>
        <InputLabel sx={{ fontSize: '28px' }} htmlFor="task">Task</InputLabel>
        <Input id="task" value={task || ""} onChange={onTyping} placeholder='Enter Your Task' />
    </Fragment>
    )
}

export default Task
