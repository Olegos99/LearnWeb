import { Component } from "react";
import Context from "./Context";

class ChildForAges extends Component {

    render() {
        return (
            <Context.Consumer>
                {(value) => {
                    return (
                        <div style={{ backgroundColor: 'red' }}>
                            <h5>Ages:</h5>
                            <ul>
                                {value.persons.map((item, key) =>
                                    <li key = {key}>
                                        {item.Age}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )
                }
                }
            </Context.Consumer>
        )
    }


}
export default ChildForAges;