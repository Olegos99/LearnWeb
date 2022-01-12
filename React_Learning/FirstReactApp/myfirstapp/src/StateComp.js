import { Component } from "react";

class StateComp extends Component {
constructor()
{
    super();
    this.state = 
    {
        username : '',
        password: '',
        counter : 0
    }
}
    getUserName = (event) => {
        this.setState({username : event.target.value});
    }

    getPassword = (event) => {
        this.setState({password : event.target.value});
    }

    increase = async() => 
    {
        var newcounter = this.state.counter+1;
        await this.setState({counter : newcounter});
        console.log(this.state.counter);
    }

    render() {
        return (
            <div>
               User Name: <input type = 'text' onChange={this.getUserName}/> <br  />
               {this.state.username}
               <br  />
               Password: <input type = 'password' onChange={this.getPassword}/> <br />
               {this.state.password}
               <br />
               <button onClick={this.increase}>Incresment</button>
            </div>
        )
    }


}


export default StateComp;