import React from 'react'
import NavigationCategory from './NavigationCategory/NavigationCategory'
import AddTaskBtn from './AddTaskBtn/AddTaskBtn'
import { Box } from '@mui/material'
import TaskList from './TaskList/TaskList'

const Content = ({ category, handleChangeCategory, shownData, handleChecked, handleDelete, showModalTrue }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <NavigationCategory category={category} handleChangeCategory={handleChangeCategory} />

            <TaskList data={shownData} handleChecked={handleChecked} handleDelete={handleDelete} />

            <AddTaskBtn showModalTrue={showModalTrue} />
        </Box>
    )
}

export default Content
