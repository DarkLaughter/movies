import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from './components/banner/banner.js'
import Nav from './components/Nav/nav';

const App = () => {
    return (
        <>
        <Banner/>
        <Nav/>
        <Switch>
            {/* <Route exact path="/home" component={home} /> */}
        </Switch>
        </>
    )
}

export default App
