import React, { Component } from 'react';
import AllUsers from './AllUsers';
import AdultUsers from './AdultUsers';
import { connect } from 'react-redux'
import { AddUser, updateUser, deleteUser }from './Redux/actions'

export class UsersContainer extends Component {
    constructor() {
        super()
        this.state = {
            ID: 1,
            Name: "",
            LastName:"",
            Age:0  
        }
    }
    
handleChange = (e) =>
{
    const {name, value} = e.target;
    this.setState({[name]:value});
}



  render() {
    return <div>
        <div>
            ID: <input name="ID" type="number" onChange={this.handleChange}></input><br/>
            Name:<input name="Name" type="text" onChange={this.handleChange}></input><br/>
            LastName:<input name="LastName" type="text" onChange={this.handleChange}></input><br/>
            Age:<input name="Age" type="number" onChange={this.handleChange}></input>
        </div><br/><br/>
        <button onClick={() => this.props.AddUser(this.state)}>Add</button>
        <button onClick={() => this.props.updateUser(this.state.ID,this.state)}>Update</button>
        <button onClick={() => this.props.deleteUser(this.state.ID)}>Delete</button> <br/>
        <AllUsers></AllUsers>
        <AdultUsers></AdultUsers>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddUser: (user) => dispatch(AddUser(user)),
        updateUser: (id, user) => dispatch(updateUser(id, user)),
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(null, mapDispatchToProps)(UsersContainer);
