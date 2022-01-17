import { Component } from "react";

class ChildComp extends Component {
constructor()
{
    super();
    this.state = 
    {
        Name: "None",
        Age : 0,
        City: "",
        Adult: false
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

    handleInputCheked = (event) =>
    {
        this.setState({Adult: event.target.checked});
    }

    sendDataToParent = () =>
    {
        //v1
        // var NewPerson = 
        // {
        //     Name: this.state.Name,
        //     Age : this.state.Age,
        //     City: this.state.City,
        //     Adult: this.state.Adult,
        // }
        // this.props.callback(NewPerson);

        //v2
        this.props.callback({...this.state});
    }

    render() {
        return (
            <div>
                <h3>Child Component</h3>
                Name: <input type = "text" onChange={this.handleInputChange} id="Name"/><br />
                Age: <input type = "number" onChange={this.handleInputChange }id="Age"/><br />
                City: <select onChange={this.handleInputChange }id="City">
                            <option value="">--Please choose an option--</option>
                            <option value="Haifa">Haifa</option>
                            <option value="Tel Aviv">Tel Aviv</option>
                            <option value="Ashdod">Ashdod</option>
                            <option value="Afula">Afula</option>
                            <option value="Jerusalem">Jerusalem</option>
                            <option value="Tokio">Tokio</option>
                        </select>
                    <br />
                Adult: <input type = "checkbox" onChange={this.handleInputCheked }id="Adult"/><br />

                <button style={{backgroundColor: "green"}} onClick={this.sendDataToParent}>Add</button>
            </div>
        )
    }


}
export default ChildComp;