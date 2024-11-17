import React from 'react'
import { Typography } from '@mui/material'


const Header = () => {
    return (
        <Typography
            variant="h1"
            sx={{ width: '100%', backgroundColor: 'rgb(160, 160, 255)', marginBottom: '5px', textAlign: 'center', color: 'whitesmoke' }}
            gutterBottom>
            Todo App
        </Typography>
    )
}
export default Header
