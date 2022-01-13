import { Component } from "react";

class Ex31 extends Component {
constructor()
{
    super();
    this.state = 
    {
        strLenght: 0
    }
}

    handleInputChange = (event) =>
    {
        this.setState({strLenght: event.target.value.length});
    }

    render() {
        var BGcolor = this.state.strLenght > 5 ? "red":"green";
        return (
            <div>
                <input style={{backgroundColor: BGcolor}} type ="text" onChange={this.handleInputChange}></input>
            </div>
        )
    }


}


export default Ex31;