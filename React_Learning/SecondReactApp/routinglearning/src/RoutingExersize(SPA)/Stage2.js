import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class Stage2 extends Component {

    constructor(){
        super()
        this.state ={
            name: "",
            age: "",
            nameFilled: false
        }
    }

    handleChange = (e) =>
    {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    HandleEror = (e) =>
    {
        this.setState({ nameFilled: e.target.value ? true: false });
    }

    next = (e) =>
    {
        e.preventDefault();
        if(this.state.nameFilled)
        {
            this.props.history.push(`/Stage3/${this.state.name}/${this.state.age}`);
        }
    }

    render() {
        return <div>
            <h2>Stage 2</h2> <br />
            <form onSubmit={this.next}>
                First Name: <input type='text' name="name" onChange={e => {
                    this.handleChange(e);
                    this.HandleEror(e);
                }}></input><br/>
                Age:<input type='text' name="age" onChange={this.handleChange}></input><br/>
                <button type='submit'>Next</button>
            </form>

        </div>;
    }
}

export default Stage2;