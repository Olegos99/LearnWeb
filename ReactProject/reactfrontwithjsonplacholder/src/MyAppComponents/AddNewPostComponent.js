import React,{ Component } from "react";

class AddNewPostComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            body: ""
        }

        this.myReftoTitleInput = React.createRef();
        this.myReftoBodyInput = React.createRef();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addPost = this.addPost.bind(this);
        this.Back = this.Back.bind(this); 
    }


    addPost()
    {
        if(this.state.title === "" && this.state.body === "")    
            this.Back();  
        else{
            this.props.SaveCallback(this.state.title, this.state.body);
            this.cleanUp();
        }

    }

    Back()
    {
        this.props.SaveCallback(null, null);
        this.cleanUp();
    }

    cleanUp()
    {
        var TitleNode = this.myReftoTitleInput.current;
        TitleNode.value = "";
        var BodyNode = this.myReftoBodyInput.current;
        BodyNode.value = "";
        this.setState({title:"", body:""});
    }

    handleInputChange()
    {
        var Title = this.myReftoTitleInput.current;
        var BodyNode = this.myReftoBodyInput.current;
        this.setState({title:Title.value, body:BodyNode.value});
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
                              <input ref={this.myReftoTitleInput} onChange={this.handleInputChange} type="text"/>
                          </td>
                      </tr>
                      <tr>
                          <td style ={{fontsize: "small"}}>
                              Body:
                          </td>
                          <td>
                              <input ref={this.myReftoBodyInput} onChange={this.handleInputChange} type="text"/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                                <button onClick={this.addPost}>Save</button>
                                <button onClick={this.Back}>Back</button>
                          </td>
                      </tr>
                  </tbody>
              </table>

            </>
        )
    }

}

export default AddNewPostComponent