import { Component } from "react";
import {getUsersFullData} from "./Utils";
import PersonComponent from "./PersonComponent";

const UsersUrl = "https://jsonplaceholder.typicode.com/users";
const PostsUrl = "https://jsonplaceholder.typicode.com/posts";
const TodosUrl = "https://jsonplaceholder.typicode.com/todos";

class PersonsContainer extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            usersToShow: []
        }
        this.SearchAlgorithm = this.SearchAlgorithm.bind(this);
    }

    componentDidMount()
    {
        this.getAllUsers();
    }

    componentDidUpdate()
    {
        console.log("this.state.users: "  );
        console.log(this.state.users);
        console.log(this.state.users.length);
        // this.setState({usersReady:true});
    }

    AddNewUser()
    {

    }

    getAllUsers = async () => {
        try {
            getUsersFullData(UsersUrl,TodosUrl,PostsUrl).then((result) =>
            {
                const UsersData = result;
                console.log("recived users are: " );
                console.log(UsersData);
                this.setState({ users: UsersData });
                this.setState({ usersToShow: UsersData });
                
            })
        }
        catch (e) {
            console.log(e)
        }
    }

    SearchAlgorithm(e)
    {
        var SearchLine = e.target.value;
        var SearchLineLength = SearchLine.length
        if(SearchLineLength == 0 || SearchLine == undefined)
        {
            this.setState({usersToShow: this.state.users});
        }
        else{
            var newUseersArray = this.state.usersToShow.filter((element) => element.name.toLowerCase().slice(0,SearchLineLength) == SearchLine.toLowerCase() ||
            element.email.toLowerCase().slice(0,SearchLineLength) == SearchLine.toLowerCase());
            this.setState({usersToShow:newUseersArray});
        }
    }

    render() {
        // Repeater
        const usersRep = this.state.usersToShow.map((user, index) => 
             <PersonComponent key={index} id={user.id} name = {user.name} email = {user.email}
             street={user.street} city={user.city} zipcode={user.zipcode}></PersonComponent>
        )

        return (
            <>  
                <nav>Search: 
                    <input type="text" onChange={this.SearchAlgorithm}></input>
                    <button onClick={this.AddNewUser}>Add</button></nav>
                {usersRep}
            </>
        )
    }

}

export default PersonsContainer