import { Component } from "react";

class PersonalData extends Component {
constructor()
{
    super();
    this.state = 
    {
        fullname: "",
        adress: ""
    }
}

componentDidMount() {
    this.setState({fullname: this.props.fullname});
    this.setState({adress: this.props.adress});
 }


    OnRedButtonClick = () => {
        //alert(`Hello ${this.props.fullname}`);
        var temp1 =  this.state.adress;
        var temp2 =  this.state.fullname;
        this.setState({fullname: temp1});
        this.setState({adress: temp2});
    }

    render() {
        return (
            <div>
                Full Name: {this.state.fullname} <br />
                Adress: {this.state.adress}<br />
                <button style={{backgroundColor: "red"}} onClick={this.OnRedButtonClick}>Swap</button>
            </div>
        )
    }


}


export default PersonalData;