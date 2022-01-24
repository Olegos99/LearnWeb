import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url ="https://jsonplaceholder.typicode.com/users";


class User extends Component {

constructor()
{
    super()
    this.state ={
        user: {
            name: "",
            email: "",
            street: "",
            city: ""
        }
    }
}

async componentDidMount()
{
    const {id} = this.props.match.params;
    const {data : userObj} = await axios.get(`${url}/${id}`);
    const user = {
        name: userObj.name,
        email:userObj.email,
        street:userObj.address.street,
        city:userObj.address.city
    }
    
    this.setState({user});

}

    render() {

        const {name,email,street,city} = this.state.user;

        return <div>
            <h2>User Details</h2>
        Name: {name}<br/>
        Email: {email}<br/>
        Street: {street}<br/>
        City: {city}<br/>
        <Link to='/'/>
        </div>;
    }
}

export default User;