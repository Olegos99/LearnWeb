import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';

class MainRouter extends Component {


    render() {
        return <div>
            <Switch>
                <Route path='/' component = {Stage1} exact/>
                <Route path='/stage2' component = {Stage2}/>
                <Route path='/stage3/:name/:age?' component = {Stage3}/>
                <Route path='/stage4/:name/:age?/:city?' component = {Stage4}/>
            </Switch>

        </div>;
    }
}

export default MainRouter;