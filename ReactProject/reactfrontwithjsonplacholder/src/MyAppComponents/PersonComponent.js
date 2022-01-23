import React, { Component, useEffect, useState }  from "react";




class PersonComponent extends Component
{
    constructor() {
        super();
        this.state = {
            id: 0,
            name: "defaultName",
            email: "defaultEmail",
            street: "element.address.street",
            city: "element.address.city",
            zipcode: "element.address.zipcode",
            showOtherData: false,
            borderColor:"blue",
            currentluSelected: false,
            timeout:{}
        }

        this.myReftoName = React.createRef();
        this.myReftoEmail = React.createRef();
        this.myReftoZip = React.createRef();
        this.myReftoCity = React.createRef();
        this.myReftoStreet = React.createRef();

        this.UpdateBTN = this.UpdateBTN.bind(this);
        this.OnOtherDataClick = this.OnOtherDataClick.bind(this);
        this.DeleteBTN = this.DeleteBTN.bind(this);      
        this.PresenFullData = this.PresenFullData.bind(this);  
        
    }

    componentDidMount()
    {
        this.setState({id:this.props.id, name: this.props.name, email: this.props.email,
        street:this.props.street, city:this.props.city,zipcode:this.props.zipcode, borderColor: this.props.borderColor,
        currentluSelected: this.props.currentluSelected});

            
        this.setState({timeout:  setTimeout(() => {
            this.SetValuesOnLoad();
        }, 200)})
   
    }

    componentDidUpdate()
    {
        if(this.state.borderColor != this.props.borderColor)
        {
            this.setState({borderColor:this.props.borderColor});
        }
        if(this.state.currentluSelected != this.props.currentluSelected)
        {
            this.setState({currentluSelected:this.props.currentluSelected});
        }
        if(this.props.id != this.state.id)
        {
            this.setState({id:this.props.id, name: this.props.name, email: this.props.email,
                street:this.props.street, city:this.props.city,zipcode:this.props.zipcode, bordercolor: this.props.borderColor,
                currentluSelected: this.props.currentluSelected,showOtherData:false});
                this.setState({timeout:  setTimeout(() => {
                    this.SetValuesOnLoad();
                }, 200)})
        }
        // if(this.props.name != this.state.name || this.props.email != this.state.email ||this.props.street != this.state.street ||
        //     this.props.city != this.state.city ||this.props.zipcode != this.state.zipcode )
        // {
        //     this.setState({id:this.props.id, name: this.props.name, email: this.props.email,
        //         street:this.props.street, city:this.props.city,zipcode:this.props.zipcode, bordercolor: this.props.borderColor,
        //         currentluSelected: this.props.currentluSelected,showOtherData:false});
        //         this.setState({timeout:  setTimeout(() => {
        //             this.SetValuesOnLoad();
        //         }, 200)})
        // }
    }

    componentWillUnmount()
    {
        this.setState({timeout:clearTimeout(this.state.timeout)});
    }

    SetValuesOnLoad()
    {
        const NameNode = this.myReftoName.current;
        const EmailNode = this.myReftoEmail.current;
        const ZipCodeNode = this.myReftoZip.current;
        const CityNode = this.myReftoCity.current;
        const StreetNode = this.myReftoStreet.current;

        NameNode.value = this.props.name;
        EmailNode.value = this.props.email;
        ZipCodeNode.value = this.props.zipcode;
        CityNode.value = this.props.city;
        StreetNode.value = this.props.street;
    }

    OnOtherDataClick()
    {
        this.setState({showOtherData: !this.state.showOtherData});
    }

    UpdateBTN()
    {
        const NameNode = this.myReftoName.current;
        const EmailNode = this.myReftoEmail.current;
        const ZipCodeNode = this.myReftoZip.current;
        const CityNode = this.myReftoCity.current;
        const StreetNode = this.myReftoStreet.current;
        this.setState({name: NameNode.value, email:EmailNode.value,
            street:StreetNode.value, city:CityNode.value,zipcode:ZipCodeNode.value});
            setTimeout(() => {
                this.props.itemUpdateCallback(this.state)
            }, 200);
    }

    DeleteBTN()
    {
        // console.log("Sending id " + this.state.id + " for deletion");
        this.props.DeletionCallback(this.state.id);
    }

    PresenFullData()
    {
        this.props.ShowFullDataCallback(this.state.id);
    }
    
    render() {
        var ShowOtherDataString = this.state.showOtherData ? "block" : "none";
        var BorderColor = this.state.borderColor === "red" ? "red":"green";
        var BGColor = this.state.currentluSelected ? "orange" : "white";
        

        return (
            <div style = {{border: "solid ", borderWidth: "3px", borderColor: BorderColor, margin: "10px",marginLeft: "10%",marginRight: "10%", backgroundColor:BGColor}}>
                <span onClick={this.PresenFullData}  style = {{cursor: "pointer"}}><b>ID: {this.state.id}</b></span> <br />
                <table style = {{marginLeft:"auto",marginRight:"auto"}}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input ref={this.myReftoName} name="name" type="text"/></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input ref={this.myReftoEmail} name="email" type="text"/></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.OnOtherDataClick} style = {{marginRight:"75%"}}>Other Data</button>
                    <div style = {{border: "solid ", borderWidth: "2px", borderColor: "black", margin: "10px", borderRadius:"20px", display:ShowOtherDataString}}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Street:
                                    </td>
                                    <td>
                                        <input  ref={this.myReftoStreet} type ="text"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        City:
                                    </td>
                                    <td>
                                        <input  ref={this.myReftoCity} type ="text"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Zip-Code:
                                    </td>
                                    <td>
                                        <input  ref={this.myReftoZip} type ="text"></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <nav style = {{marginLeft:"60%"}}>
                    <button onClick={this.UpdateBTN}>Update</button>
                    <button onClick={this.DeleteBTN}>Delete</button>
                </nav>
            </div>
        )
    }
}

export default PersonComponent