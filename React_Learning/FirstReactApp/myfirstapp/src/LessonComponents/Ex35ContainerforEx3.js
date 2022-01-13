import { Component } from "react";
import Ex33 from './Ex33.js';
import React from 'react';

class Ex35 extends Component {
constructor()
{
    super();
    this.state = 
    {
        Persons: [],
        NewPersonName: "",
        NewPersonAge: 0,
        NewPersonCity: ""
    }
}

componentDidMount() {
    this.setState({NewPersonName: "", NewPersonAge:0, NewPersonCity: ""});
 }


 handleInputFieldText = (event) =>
 {
    if(event.target.id === "name")
    {
        this.setState({NewPersonName: event.target.value});
    }
    if(event.target.id === "age")
    {
        this.setState({NewPersonAge: event.target.value});
    }
    if(event.target.id === "city")
    {
        this.setState({NewPersonCity: event.target.value});
    }
 }

 handleAddNewPersonClick = () =>
 {
    // var PlaceToAppend = document.getElementById("PersonsTable");
    // // var newTR = <Ex33 Name = {this.state.NewPersonName} Age={this.state.NewPersonAge} City={this.state.NewPNewPersonCityersonName}></Ex33>;
    // var newTR = () => { 
    //     return(<Ex33 Name = {this.state.NewPersonName} Age={this.state.NewPersonAge} City={this.state.NewPNewPersonCityersonName}></Ex33>);
    //     // (React.createElement(() => Ex33,{Name: `'${this.state.NewPersonName}'`,  Age: `'${this.state.NewPersonAge}'`, City:`'${this.state.NewPersonCity}'`}))
    // } 
    
    // PlaceToAppend.append(newTR);
    var newPersonsArr = [... this.state.Persons];
    var newPerson =
    {
        Name: this.state.NewPersonName,
        Age:this.state.NewPersonAge,
        City:this.state.NewPersonCity
    }
    newPersonsArr.push(newPerson);
    this.setState({Persons: newPersonsArr});
 }

    render() {    
        return (
            <>

                <table style={{border : "1px solid black"}}>
                    <tbody id = "PersonsTable">
                    <tr><th>Name</th><th>Age</th><th>City</th></tr>
                    <Ex33 Name ="Oleg" Age="22" City="Haifa"></Ex33>
                    <Ex33 Name ="Ron" Age="20" City="Telaviv"></Ex33>
                    <Ex33 Name ="Dov" Age="27" City="Ashdod"></Ex33>
                    <Ex33 Name ="Vered" Age="45" City="Lod"></Ex33>
                    {this.state.Persons.map((item,index) => <Ex33 Name ={item.Name} Age={item.Age} City={item.City}></Ex33>)}
                    </tbody>
                </table>
                <br />
                Name: <input type = "text" onChange={this.handleInputFieldText} id = "name"></input>                <br />
                Age: <input type = "number" onChange={this.handleInputFieldText}  id = "age"></input>                <br />
                City: <input type = "text" onChange={this.handleInputFieldText}  id = "city"></input>                <br />
                <button onClick={this.handleAddNewPersonClick}>Add New Person</button>
            </>
        )
    }


}


export default Ex35;