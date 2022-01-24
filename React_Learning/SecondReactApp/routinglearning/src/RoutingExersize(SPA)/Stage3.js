import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class Stage3 extends Component {

    constructor()
    {
        super()
            this.state = 
            {
                city: ""
            }
    }

    handleChange = (e) =>
    {
        this.setState({city:e.target.value});
    }

    next = () =>
    {
        const {name, age} = this.props.match.params;
        const {city} = this.state;
        this.props.history.push(`/Stage4/${name}/${age}/${city}`);
    }

    render() {
        return <div>
            <h2>Stage 3</h2>
            <select onChange={this.handleChange}>
                <option value='' defaultValue={''} disabled></option>
                <option  value = 'Hadera'>Hadera</option>
                <option  value = 'Haifa'>Haifa</option>
                <option  value = 'Tel Aviv'>Tel Aviv</option>
            </select>
            <button onClick={this.next}>Next</button>

        </div>;
    }
}

export default Stage3;