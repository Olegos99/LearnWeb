import { Component } from "react";
import React from "react";

class PersonComponent extends Component
{
    constructor() {
        super();
        this.state = {
            id: 0,
            name: "defaultName",
            email: "defaultEmail",
            street: "element.address.street",
            city: "element.address.city",
            zipcode: "element.address.zipcode",
            showOtherData: false,
        }

        this.myReftoName = React.createRef();
        this.myReftoEmail = React.createRef();

        this.HandleInputChange = this.HandleInputChange.bind(this);
        this.HandleLoad = this.HandleLoad.bind(this);
        
    }

    componentDidMount()
    {
        this.setState({id:this.props.id, name: this.props.name, email: this.props.email});
        setTimeout(() => {
            const NameNode = this.myReftoName.current;
            NameNode.value = this.props.name;
            const EmailNode = this.myReftoEmail.current;
            EmailNode.value = this.props.email;
            // document.getElementById("name").value = this.props.name;
            // document.getElementById("email").value = this.props.email;
        }, 200);
    }

    HandleInputChange(e)
    {
        var value = e.target.value;
        var FieldName = e.target.name;
        if(FieldName === "name")
        {
            this.setState({name:value});
        }
        if(FieldName === "email")
        {
            this.setState({email:value});
        }
    }

    OnOtherDataClick()
    {
        this.setState({showOtherData: !this.state.showOtherData});
    }

    HandleLoad(e)
    {
        e.target.value = "hehehe";
    }

    UpdateBTN()
    {

    }

    DeleteBTN()
    {

    }
    
    render() {
        return (
            <div style = {{border: "solid ", borderWidth: "1px", borderColor: "blue", margin: "10px"}}>
                <span>ID: {this.state.id}</span> <br />
                <table style = {{marginLeft:"auto",marginRight:"auto"}}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input ref={this.myReftoName} name="name" type="text" onLoad={(e) => this.HandleLoad} onChange={this.HandleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input ref={this.myReftoEmail} name="email" type="text" onLoad={(e) => this.HandleLoad} onChange={this.HandleInputChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <nav>
                    <button onClick={this.OnOtherDataClick}>Other Data</button>
                    <button onClick={this.UpdateBTN}>Update</button>
                    <button onClick={this.DeleteBTN}>Delete</button>
                </nav>
            </div>
        )
    }
}

export default PersonComponent