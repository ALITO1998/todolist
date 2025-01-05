import { AllInclusive, DoneAll, Pending } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import React from 'react'

const NavigationCategory = ({ status, handleChangeStatus }) => {
    return (
        <Paper elevation={1} >
            <BottomNavigation value={status} onChange={handleChangeStatus}>
                <BottomNavigationAction
                    label="All"
                    value="all"
                    icon={<AllInclusive />}
                />
                <BottomNavigationAction
                    label="Done"
                    value="done"
                    icon={<DoneAll />}
                />
                <BottomNavigationAction
                    label="Pending"
                    value="not yet"
                    icon={<Pending />}
                />
            </BottomNavigation>
        </Paper>
    )
}

export default NavigationCategory
