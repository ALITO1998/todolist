import React from 'react'
import Header from '../Components/Header/Header';
import Content from '../Components/Content/Content';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import store from '../store'
const App = () => {
    return (

        <Container maxWidth={'md'}>
            <Header></Header>
            <Provider store={store} >
                <Content />
            </Provider>
        </Container>

    )
}

export default App
