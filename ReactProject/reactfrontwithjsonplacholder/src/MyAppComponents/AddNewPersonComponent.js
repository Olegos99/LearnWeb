import React,{ Component } from "react";

class AddNewPersonComponent extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Email: ""
        }

        this.myRefToNameInput = React.createRef();
        this.myRefToEmailInput = React.createRef();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
        this.Back = this.Back.bind(this); 
    }

    
    addNewPerson()
    {
        if(this.state.Name != "")
        {
            this.props.SaveCallback(this.state.Name, this.state.Email);
            this.clenUp();
        }
        else
        this.Back()
    }

    Back()
    {
        this.props.SaveCallback(null, null);
        this.clenUp();
    }

    clenUp()
    {
        var Name = this.myRefToNameInput.current;
        var Email = this.myRefToEmailInput.current;
        Name.value = "";
        Email.value = "";
    }

    handleInputChange()
    {
        var Name = this.myRefToNameInput.current;
        var Email = this.myRefToEmailInput.current;
        this.setState({Name:Name.value, Email:Email.value});
    }


    render() {

        return (
            <>
              <table style ={{border: "solid ", borderWidth: "1px", borderColor: "black",   fontsize: "small", margin: "10px",marginLeft: "10%",marginRight: "10%"}}>
                  <tbody>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              Name:
                          </td>
                          <td>
                                <input ref={this.myRefToNameInput} onChange={this.handleInputChange} type="text"/>
                          </td>
                      </tr>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              Email:
                          </td>
                          <td>
                                <input ref={this.myRefToEmailInput} onChange={this.handleInputChange} type="text"/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                                <button onClick={this.addNewPerson}>Save</button>
                                <button onClick={this.Back}>Back</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </>
        )
    }

}

export default AddNewPersonComponent