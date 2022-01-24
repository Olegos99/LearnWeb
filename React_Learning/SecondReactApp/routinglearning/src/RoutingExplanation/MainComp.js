import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home';
import Product from './product';
import Products from './products';

class MainComp extends Component {


    render() {
        return <div>
            <h1>Main Comp Header</h1>
            <Link to='/'>Home</Link><br />
            <Link to='/products'>Products</Link><br />

            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/products' component={Products} />
                <Route path='/product/:id/:index/:name?' component={Product} />
            </Switch>
            <h1>Main Comp Footer</h1>

        </div>;
    }
}

export default MainComp;