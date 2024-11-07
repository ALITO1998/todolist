import React from 'react'
import TaskCard from './TaskCard/TaskCard'

const TaskList = ({ data, handleDelete, handleChecked }) => {
    return data.map(item => (
        <TaskCard key={item.id} handleDelete={handleDelete} id={item.id} item={item} handleChecked={handleChecked} />
    ))
}


export default TaskList