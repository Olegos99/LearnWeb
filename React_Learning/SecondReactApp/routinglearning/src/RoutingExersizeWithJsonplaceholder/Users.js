import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url ="https://jsonplaceholder.typicode.com/users";

class Users extends Component {

constructor()
{
    super()
    this.state ={
        users:[]
    }
}

async componentDidMount()
{
    const {data: users} = await axios.get(url);
    this.setState({users});
}

    render() {

        const Users = this.state.users.map((user) => 
        {
            return <li key={user.id}><Link to={`/user/${user.id}`}>{user.username}</Link></li>
        })

        return <div>
        {Users}
        </div>;
    }
}

export default Users;