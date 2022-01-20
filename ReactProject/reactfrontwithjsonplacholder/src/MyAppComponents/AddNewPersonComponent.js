import React,{ Component } from "react";

class AddNewPersonComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: "aaa",
            body: "aaa"
        }
    }

    componentDidMount()
    {

    }

    componentDidUpdate(){


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

export default AddNewPersonComponent