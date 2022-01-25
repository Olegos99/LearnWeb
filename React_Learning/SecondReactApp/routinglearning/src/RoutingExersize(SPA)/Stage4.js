import React, { Component } from 'react';

class Stage4 extends Component {

    render() {

        const {name, age, city} = this.props.match.params;

        return <div>
            <h2>Final Stage</h2> <br/>
            Name:{name}<br/>
            Age: {age != undefined ? age : 'No age'}<br/>
            City: {city != undefined ? city : 'No city'}<br/>
        </div>;
    }
}

export default Stage4;