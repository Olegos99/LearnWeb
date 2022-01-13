import { Component } from "react";

class Ex33 extends Component {
constructor()
{
    super();
    this.state = 
    {
        Name: "",
        Age: 0,
        City: ""
    }
    
}


componentDidMount() {
    this.setState({Name: this.props.Name, Age:this.props.Age, City: this.props.City});
 }

    render() {    
        return (
            <>
                <tr>
                    <td>
                        {this.state.Name}
                    </td>
                    <td>
                        {this.state.Age}
                    </td>
                    <td>
                        {this.state.City}
                    </td>
                </tr>
                {/* <li>
                    {this.state.Name}
                    <ul>
                        <li>Age: {this.state.Age}</li>
                        <li>City: {this.state.City}</li>
                    </ul>
                </li> */}
            </>
        )
    }


}


export default Ex33;