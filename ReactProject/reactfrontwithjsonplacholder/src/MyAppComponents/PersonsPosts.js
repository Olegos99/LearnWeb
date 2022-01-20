import React,{ Component } from "react";

class PersonsPosts extends Component {
    constructor() {
        super();
        this.state = {
            title: "aaa",
            body: "aaa"
        }
    }

    componentDidMount()
    {
        this.setState({title: this.props.title, body:this.props.body});
    }

    componentDidUpdate(){
        if(this.props.title !=  this.state.title)
        {
            this.setState({title: this.props.title, body:this.props.body});
        }

    }


    render() {

        return (
            <>
              <table style ={{border: "solid ", borderWidth: "1px", borderColor: "black",   fontsize: "small",  margin: "2%",marginLeft: "2%",marginRight: "2%", width:"96%",}}>
                  <tbody>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              Title:
                          </td>
                          <td>
                              <span style ={{fontsize: "small"}}><i>{this.state.title}</i></span>
                          </td>
                      </tr>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              Body:
                          </td>
                          <td>
                              <span style ={{fontsize: "small"}}>{this.state.body}</span>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </>
        )
    }

}

export default PersonsPosts