import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return <div>
            <h1>Products</h1>

            <ul>
                <li><Link to='/product/1/0/watch' >Watch</Link></li>
                <li><Link to='/product/2/1' >Laptop</Link></li>
                <li><Link to='/product/3/2/phone' >Phone</Link></li>
            </ul>
        </div>;
    }
}

export default Products;