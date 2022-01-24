import React, { Component } from 'react';

class Home extends Component {

    next = () => {
        // some logics...
        this.props.history.push('/products');
    }

    render() {
        return <div>
            <h1>Home</h1>

            <button onClick={this.next}>Products</button>
        </div>;
    }
}

export default Home;