import { AddTask } from '@mui/icons-material'
import { Fab, Tooltip } from '@mui/material'
import React from 'react'

const AddTaskBtn = ({ openModal }) => {
    return (
        <Tooltip title="Add Task">
            <Fab onClick={openModal} color="primary" aria-label="add" sx={{ bottom: '5%', position: 'fixed' }}>
                <AddTask />
            </Fab>
        </Tooltip>
    )
}

export default AddTaskBtn
