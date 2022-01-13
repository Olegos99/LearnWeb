import { Component } from "react";

class Ex32 extends Component {
constructor()
{
    super();
    this.state = 
    {
        ColorsArray: []
    }
}

    handleInputChange = (event) =>
    {
        Array.prototype.remove = function() {
            var what, a = arguments, L = a.length, ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                }
            }
            return this;
        };

        let newArr = [...this.state.ColorsArray]
        if(event.target.checked)
        {
            newArr.push(String(event.target.id));
        }
        else{
            newArr.remove(event.target.id);
        }
        
        // newArr = newArr.includes(String(event.target.id)) ? newArr.remove(event.target.id) : newArr.push(String(event.target.id));
        console.log(event.target.id)
        console.log(newArr)
        this.setState({ColorsArray: newArr});
    }

    render() {
        var ArrayToPresent = [];
        if(this.state.ColorsArray.length > 0)
        {
            ArrayToPresent = this.state.ColorsArray.map((item, index) => (<li key ={index}>{item}</li>));
        }
       
        return (
            <div>
                Red: <input type ="checkbox" id="red" onChange={this.handleInputChange}></input> <br />
                Green: <input type ="checkbox" id="green" onChange={this.handleInputChange}></input> <br />
                Blue: <input type ="checkbox" id="blue" onChange={this.handleInputChange}></input>
                <ul>{ArrayToPresent}</ul>
            </div>
        )
    }


}


export default Ex32;