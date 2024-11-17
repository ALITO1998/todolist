import React from 'react'
import TaskCard from './TaskCard/TaskCard'
import { List } from '@mui/material'

const TaskList = ({ data, handleDelete, handleChecked }) => {
    return <List sx={{ width: '100%' }}> {data.map(item => (
        <TaskCard key={item.id} handleDelete={handleDelete} id={item.id} item={item} handleChecked={handleChecked} />
    ))}
    </List>
}


export default TaskList