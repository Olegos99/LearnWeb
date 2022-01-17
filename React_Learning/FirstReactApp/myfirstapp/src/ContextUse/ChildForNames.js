import { Component } from "react";
import ChildForAges from './ChildForAges';
import Context from "./Context";

class ChildForNames extends Component {

    render() {
        return (
            <Context.Consumer>
                {(value) => {
                    return (
                        <div style={{ backgroundColor: 'green' }}>
                            <h5>Names:</h5>
                            <ul>
                                {value.persons.map((item, key) =>

                                    <li key = {key}>
                                        {item.Name}
                                    </li>
                                )}
                            </ul>
                            <ChildForAges></ChildForAges>
                        </div>
                    )
                }
                }
            </Context.Consumer>
        )
    }


}
export default ChildForNames;