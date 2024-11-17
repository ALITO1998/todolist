import { AddTask } from '@mui/icons-material'
import { Fab } from '@mui/material'
import React from 'react'

const AddTaskBtn = ({ showModalTrue }) => {
    return (
        <Fab onClick={showModalTrue} color="primary" aria-label="add">
            <AddTask />
        </Fab>
    )
}

export default AddTaskBtn
