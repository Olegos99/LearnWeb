import { Component } from "react";
import ChildComp from './ChildComp.js';

class ParentComp extends Component {
constructor()
{
    super();
    this.state = 
    {
        persons : []
    }
}

    AddDataFromChild = (Data) =>
    {
        var NewPersonsArr = [...this.state.persons];
        NewPersonsArr.push(Data);
        this.setState({persons: NewPersonsArr});
    }

    render() {
        return (
            <div>
               <h2>Parent conponent:</h2>
               <ul>
                   {this.state.persons.map((item, key) => 
                        <li key = {key}>{`${item.Name} is ${item.Age} years old, lives in ${item.City}. (${item.Adult === true ? "Adult":"Child"})`}</li>
                   )}
               </ul>
               <ChildComp callback={this.AddDataFromChild}></ChildComp>
            </div>
        )
    }
}

export default ParentComp;