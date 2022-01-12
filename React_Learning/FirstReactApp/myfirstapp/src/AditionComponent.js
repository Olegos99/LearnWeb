import { Component } from "react";

class AditionComponent extends Component {
constructor()
{
    super();
    this.state = 
    {
        sum: 0,
        numtoadd : 0
    }
}

    OnRedButtonClick = () => {
        //alert(`Hello ${this.props.fullname}`);
        var temp1 =  Number(this.state.sum + this.state.numtoadd);
        this.setState({sum: temp1});  
    }

    handleInputChange = (event) =>
    {
        this.setState({numtoadd: Number(event.target.value)});
    }

    render() {
        return (
            <div>
                Schum: {this.state.sum} <br />
                Number to add: <input type = "number" onChange={this.handleInputChange }/><br />
                <button style={{backgroundColor: "green"}} onClick={this.OnRedButtonClick}>Add</button>
            </div>
        )
    }


}


export default AditionComponent;