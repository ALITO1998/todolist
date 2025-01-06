import React from 'react'
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { Delete } from '@mui/icons-material'
import Task from '../../Task/Task'

const TaskCard = ({ item, handleDelete, handleChecked }) => {
    // Render the task card with checkbox, task description, and delete button
    return <ListItem key={item.id}>
        <ListItemButton label="Task">
            <ListItemIcon>
                <Checkbox
                    checked={item.task.status === 'not yet' ? false : true}
                    onClick={() => { return handleChecked(item.id) }}
                    sx={{ color: 'blue', '&.Mui-checked': { color: "gray" }, }}
                />
            </ListItemIcon>
            <Task type="show" task={item} />
            <ListItemIcon>
                <IconButton onClick={() => handleDelete(item.id)}>
                    <Delete />
                </IconButton>
            </ListItemIcon>
        </ListItemButton>
    </ListItem>
}

export default TaskCard
