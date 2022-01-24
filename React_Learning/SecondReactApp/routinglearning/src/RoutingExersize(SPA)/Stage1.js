import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class Stage1 extends Component {

    next = () =>
    {
        this.props.history.push('/Stage2');
    }

    render() {
        return <div>
            <h1>Wellcome page</h1>
        <button onClick={this.next}>Next</button>
        </div>;
    }
}

export default Stage1;