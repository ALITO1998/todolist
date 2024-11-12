import React from 'react'
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Delete } from '@mui/icons-material'

const TaskCard = ({ item, handleDelete, handleChecked }) => {
    // Render the task card with checkbox, task description, and delete button
    return <ListItem key={item.id}>
        <ListItemButton label="Task">

            <ListItemIcon>
                <Checkbox
                    checked={item.status === 'not yet' ? false : true}
                    onClick={() => { return handleChecked(item.id) }}
                    sx={{ color: 'blue', '&.Mui-checked': { color: 'green' }, }}
                />
            </ListItemIcon>
            <ListItemText primary={item.task} />
            <ListItemIcon>
                <IconButton onClick={() => handleDelete(item.id)}>
                    <Delete />
                </IconButton>
            </ListItemIcon>
        </ListItemButton>
    </ListItem>
}

export default TaskCard
