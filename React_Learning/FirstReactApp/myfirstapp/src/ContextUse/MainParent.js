import { Component } from "react";
import Context from "./Context";
import ChildForNames from './ChildForNames';

class MainParent extends Component {
constructor()
{
    super();
    this.state = 
    {
        persons : [],
        Name: "None",
        Age : 0
    }
}

    handleInputChange = (event) =>
    {

        //v1
        // var ChangedID = event.target.id;
        // if(ChangedID === "Name")
        // {
        //     this.setState({Name: event.target.value});
        // }
        // if(ChangedID === "Age")
        // {
        //     this.setState({Age: event.target.value});
        // }
        // if(ChangedID === "City")
        // {
        //     this.setState({City: event.target.value});
        // }
        // if(ChangedID === "Adult")
        // {
        //     this.setState({Adult: event.target.checked});
        // }

        //v2
        this.setState({[event.target.id]: event.target.value});
    }


    SaveData = () =>
    {
        var NewPerson=
        {
            Name: this.state.Name,
            Age: this.state.Age
        }

        this.setState({persons: [...this.state.persons, NewPerson]});
    }

    render() {
        return (
            <Context.Provider value = {{ ...this.state }}>
                <div>
                    <h3>Parent Component</h3>
                    Name: <input type = "text" onChange={this.handleInputChange} id="Name"/><br />
                    Age: <input type = "number" onChange={this.handleInputChange }id="Age"/><br />
                    <button style={{backgroundColor: "green"}} onClick={this.SaveData}>Add</button>
                    <ChildForNames></ChildForNames>
                </div>
            </Context.Provider>
        )
    }


}
export default MainParent;