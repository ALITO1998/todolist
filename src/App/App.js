import React from 'react'
import Header from '../Components/Header/Header';
import Content from '../Components/Content/Content';
import { Container } from '@mui/material';
const App = () => {


    return (

        <Container maxWidth={'md'}>
            <Header></Header>
            <Content />
        </Container>

    )
}

export default App
