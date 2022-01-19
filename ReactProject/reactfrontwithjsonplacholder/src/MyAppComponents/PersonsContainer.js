import { Component } from "react";
import React from "react";
import {getUsersFullData} from "./Utils";
import PersonComponent from "./PersonComponent";
import PersonsPosts from "./PersonsPosts";
import PersonsToDos from "./PersonsToDos";

const UsersUrl = "https://jsonplaceholder.typicode.com/users";
const PostsUrl = "https://jsonplaceholder.typicode.com/posts";
const TodosUrl = "https://jsonplaceholder.typicode.com/todos";

class PersonsContainer extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            usersToShow: [],
            currentlySearching: false,
            showfullData : false,
            currentluPresentingUser:{}
        }
        this.myReftoSearchLine = React.createRef();

        this.SearchAlgorithm = this.SearchAlgorithm.bind(this);
    }

    componentDidMount()
    {
        this.getAllUsers();
    }

    componentDidUpdate()
    {
        // console.log("this.state.users: "  );
        // console.log(this.state.users);
        // console.log(this.state.users.length);
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
                // console.log("recived users are: " );
                // console.log(UsersData);
                this.setState({ users: UsersData });
                this.setState({ usersToShow: UsersData });
                
            })
        }
        catch (e) {
            console.log(e)
        }
    }

    SearchAlgorithm()
    {
        var SearchLineNode = this.myReftoSearchLine.current;
        var SearchLine = SearchLineNode.value;
        var SearchLineLength = SearchLine.length;
        if(SearchLineLength == 0 || SearchLine == undefined)
        {
            this.setState({usersToShow: this.state.users});
            this.setState({currentlySearching: false});
        }
        else{
            this.setState({currentlySearching: true});
            console.log("Searchline to lower = " + SearchLine.toLowerCase());
            var newUseersArray = this.state.users.filter((element) => element.name.toLowerCase().includes(SearchLine.toLowerCase()) ||
            element.email.toLowerCase().includes(SearchLine.toLowerCase()));
            this.setState({usersToShow:newUseersArray});
        }
    }

    DeleteUserWithId = (ID) =>
    {
        var newArr = [...this.state.users];
        // console.log("Deletion function gets id "+ ID + " and desides to remove item with id" + newArr.findIndex(function(i){return i.id === ID;}));
        newArr.splice(newArr.findIndex(function(i){
            return i.id === ID;
        }), 1);

        var newarrtoshow = [...this.state.usersToShow];
        newarrtoshow.splice(newarrtoshow.findIndex(function(i){
            return i.id === ID;
        }), 1);


        this.setState({users:newArr});
        this.setState({usersToShow:newarrtoshow});
        // if(this.state.currentlySearching)
        // {
        //     setTimeout(() => {
        //         this.SearchAlgorithm();
        //     }, 50);
        // }
        if(ID === this.state.currentluPresentingUser.id)
        {
            this.setState({showfullData:!this.state.showfullData});
            this.setState({currentluPresentingUser:{}});
        }
    }

    UpdateItemWithId = (state) =>
    {
        const index = this.state.users.findIndex((usr) => usr.id === state.id);
        var NewUser = this.state.users[index];
        NewUser = {
            ...this.state.users[index]
        } 
        NewUser.name = state.name;
        NewUser.email = state.email;
        NewUser.city = state.city;
        NewUser.zipcode = state.zipcode;
        NewUser.street = state.street;
        NewUser.borderColor = state.borderColor;

        const updatedUsers = [...this.state.users];
        updatedUsers.splice(index, 1, NewUser); 
        this.setState({users: updatedUsers});
        // this.setState({usersToShow:updatedUsers});
        // if(this.state.currentlySearching)
        // {
        //     setTimeout(() => {
        //         this.SearchAlgorithm();
        //     }, 100);
        // }
    }

    DesidingOnBorderColor(user)
    {
        var AllTasksAreCompleted = true;

        var UsersTodos = [...user.todos.data]

        for(var i = 0; i < UsersTodos.length; i++)
        {
            if(!UsersTodos[i].completed)
            {
                AllTasksAreCompleted = false;
                break;
            }
        }
        // console.log(`Desiding on border color for user with id: ${user.id} desigion is:  ${ AllTasksAreCompleted ? "green":"red"}`);

        return AllTasksAreCompleted ? "green":"red";
    }

    ShowFullDataTogle = (userid) =>
    {
        // console.log("We get user id for display = " + userid);
        if(this.state.showfullData)
        {
            if(userid === this.state.currentluPresentingUser.id)
            {
                this.setState({showfullData:!this.state.showfullData});
                this.setState({currentluPresentingUser:{}});
            }
            else{

                var FindUser = this.state.users.filter(usr => usr.id === userid);
                // console.log("filtering result: ");
                // console.log(FindUser.id);
                this.setState({currentluPresentingUser:FindUser[0]});
            }
        }
        else
        {
            this.setState({showfullData:!this.state.showfullData});
            var FindUser = this.state.users.filter(usr => usr.id === userid);
            // console.log("filtering result: ");
            // console.log(FindUser.id);
            this.setState({currentluPresentingUser:FindUser[0]});
            // this.setState({currentluPresentingUser:this.state.users[userid-1]});
        }
    }

    CompleteTheTask = (TaskId) =>
    {
        const Userindex = this.state.users.findIndex((usr) => usr.id === this.state.currentluPresentingUser.id );
        var NewUser = this.state.users[Userindex];
        // console.log("NewUser");
        // console.log(NewUser);
        var userPreviousTasks = NewUser.todos.data;
        // console.log("userPreviousTasks");
        // console.log(userPreviousTasks);
        var userUpdatedTasks = userPreviousTasks;
        // console.log("userUpdatedTasks");
        // console.log(userUpdatedTasks);

        // console.log("userUpdatedTasks[TaskId]");
        // console.log(userUpdatedTasks[0]);

        const index = userUpdatedTasks.findIndex((task) => task.id === TaskId);
        userUpdatedTasks[index].completed = true;

        NewUser.todos.data = userUpdatedTasks;
        const updatedUsers = [...this.state.users];
       
        updatedUsers.splice(Userindex, 1, NewUser); 
        this.setState({users: updatedUsers});
        // this.setState({usersToShow:updatedUsers});
        // if(this.state.currentlySearching)
        // {
        //     setTimeout(() => {
        //         this.SearchAlgorithm();
        //     }, 50);
        // }
    }

    render() {
        // Repeater
        const usersRep = this.state.usersToShow.map((user, index) => 
             <PersonComponent key={index} id={user.id} name = {user.name} email = {user.email}
             street={user.street} city={user.city} zipcode={user.zipcode} DeletionCallback = {this.DeleteUserWithId}
             itemUpdateCallback = {this.UpdateItemWithId} ShowFullDataCallback = {this.ShowFullDataTogle} 
             borderColor = {this.DesidingOnBorderColor(user)} currentluSelected = {user.id === this.state.currentluPresentingUser.id}>  
             </PersonComponent>
        )

        // console.log("curr user id:");
        // console.log(this.state.currentluPresentingUser.id);

        const CurrentUsersPosts = this.state.currentluPresentingUser !== undefined ? this.state.currentluPresentingUser.posts : {};

        // if(CurrentUsersPosts !== undefined)
        // {
        //     console.log(CurrentUsersPosts.data);
        // }

        let UsersPosts = [{...CurrentUsersPosts}];
        if(CurrentUsersPosts !== undefined)
        {
            UsersPosts = CurrentUsersPosts.data.map((post, index) =>
                <PersonsPosts key={index} title={post.title} body={post.body}></PersonsPosts>
            )
        }
        else{
            UsersPosts = <h2>OMG</h2>;
        }

        const CurrentUsersTodos = this.state.currentluPresentingUser !== undefined ? this.state.currentluPresentingUser.todos : {};

        // if(CurrentUsersTodos !== undefined)
        // {
        //     console.log(CurrentUsersTodos.data);
        // }

        let UsersTodos = [{...CurrentUsersTodos}];
        if(CurrentUsersTodos !== undefined)
        {
            UsersTodos = CurrentUsersTodos.data.map((todo, index) =>
                <PersonsToDos key={index} title={todo.title} completed={todo.completed} id= {todo.id} callback={this.CompleteTheTask}></PersonsToDos>
            )
        }
        else{
            UsersTodos = <h2>OMG</h2>;
        }

        return (
            <>
                <nav style ={{display:"flex"}}>
                    <div style ={{border: "solid ", borderWidth: "1px", borderColor: "black", borderRadius:"50px",width:"50%"}}>  
                            <nav>
                                Search: 
                                <input ref={this.myReftoSearchLine} type="text" onChange={this.SearchAlgorithm}></input>
                                <button onClick={this.AddNewUser}>Add</button>
                            </nav>
                            {usersRep}
                    </div>
                    <div style ={{display:this.state.showfullData ? "block":"none", width:"45%", marginLeft:"10px"}}>
                            <h2>Todos:</h2>
                            <div style ={{border: "solid ", borderWidth: "1px", borderColor: "black", height:"fit-content", display: "block", width: "100%"}}>
                                {UsersTodos}
                            </div>
                            <h2>Posts:</h2>
                            <div style ={{border: "solid ", borderWidth: "1px", borderColor: "black", height:"fit-content", display: "block", width: "100%"}}>
                                {UsersPosts}
                            </div>
                    </div>
                </nav>
            </>
        )
    }

}

export default PersonsContainer