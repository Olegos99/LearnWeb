import React,{ Component } from "react";

class AddNewToDoComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: "aaa"
        }

        this.myReftoInput = React.createRef();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.Back = this.Back.bind(this); 
    }


    addTodo()
    {
        if(this.state.title != "")
        {
            this.props.SaveCallback(this.state.title);
            this.clenUp();
        }
        else
        this.Back()
    }

    Back()
    {
        this.props.SaveCallback(null);
        this.clenUp();
    }

    clenUp()
    {
        var CreationLineNode = this.myReftoInput.current;
        CreationLineNode.value = "";
    }

    handleInputChange(e)
    {
        this.setState({title:e.target.value});
    }


    render() {

        return (
            <>
              <table style ={{border: "solid ", borderWidth: "1px", borderColor: "black",   fontsize: "small", margin: "10px",marginLeft: "10%",marginRight: "10%"}}>
                  <tbody>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              Title:
                          </td>
                          <td>
                              <input ref={this.myReftoInput} onChange={this.handleInputChange} type="text"/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                                <button onClick={this.addTodo}>Save</button>
                                <button onClick={this.Back}>Back</button>
                          </td>
                      </tr>
                  </tbody>
              </table>

            </>
        )
    }

}

export default AddNewToDoComponent