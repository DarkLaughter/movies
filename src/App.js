import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from './components/banner/banner.js'
import Nav from './components/Nav/nav';
import Home from './components/home/home';
import Moviecards from './components/moviecards/moviecards'


const App = () => {
    return (
        <>
        <Banner/>
        <Nav/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Moviecards} />
        </Switch>
        </>
    )
}

export default App
