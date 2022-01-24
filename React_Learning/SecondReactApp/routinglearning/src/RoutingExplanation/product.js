import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {

        const { id, name, index } = this.props.match.params

        return <div>

            <Link to='/products'>Back</Link><br /><br />

            Index: {index}<br />
            ID: {id}<br />
            Name: {name ? name : 'No Name'}<br />
        </div>;
    }
}

export default Product;