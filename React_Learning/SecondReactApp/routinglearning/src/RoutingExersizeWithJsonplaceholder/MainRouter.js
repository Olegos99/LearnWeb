import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Users from './Users';
import User from './User';

class MainRouter extends Component {

  render() {
    return <div>
        <Switch>
            <Route path='/' component = {Users} exact></Route>
            <Route path='/user/:id' component = {User}></Route>
        </Switch>
    </div>;
  }
}

export default MainRouter;
