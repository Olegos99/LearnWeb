import React,{ Component } from "react";

class PersonsToDos extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            title: "aaa",
            completed: false
        }


        this.completeTask = this.completeTask.bind(this);
    }

    componentDidMount()
    {
        this.setState({title: this.props.title, completed:this.props.completed, id:this.props.id});
    }

    componentDidUpdate(){
        if(this.props.completed != this.state.completed)
        {
            this.setState({completed:this.props.completed});
        }
        if(this.props.title != this.state.title)
        {
            this.setState({title: this.props.title, completed:this.props.completed, id:this.props.id});
        }

    }

    completeTask()
    {
        this.props.callback(this.state.id);
    }


    render() {
        var CompleteTaskButtonDisplay = this.state.completed ? "none":"block";

        return (
            <>
              <table style ={{border: "solid ", borderWidth: "1px", borderColor: "purple", fontsize: "small", margin: "2%",marginLeft: "2%",marginRight: "2%", width:"96%", justifyContent:"left"}}>
                  <tbody>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              <b>Title:</b> {this.state.title}
                          </td>
                      </tr>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              <b>Completed: </b>  {this.state.completed ? "true" : "false"}
                          </td>
                      </tr>
                      <tr>
                            <td style={{display: CompleteTaskButtonDisplay, marginLeft:"65%"}}>
                              <button onClick={this.completeTask}>Complete Task</button>
                            </td>
                      </tr>
                  </tbody>
              </table>
            </>
        )
    }

}

export default PersonsToDos