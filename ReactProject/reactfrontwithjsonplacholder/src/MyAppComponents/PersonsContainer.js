import { Component } from "react";
import React from "react";
import {getUsersFullData} from "./Utils";
import PersonComponent from "./PersonComponent";
import PersonsPosts from "./PersonsPosts";
import PersonsToDos from "./PersonsToDos";
import AddNewToDoComponent from "./AddNewToDoComponent";
import AddNewPostComponent from "./AddNewPostComponent";
import AddNewPersonComponent from "./AddNewPersonComponent";

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
            showNewuserCreation : false,
            showNewTodoCreation : false,
            showNewPostCreation : false,
            currentluPresentingUser:{},
            currentuserwithOtherData:{}
        }
        this.myReftoSearchLine = React.createRef();

        this.SearchAlgorithm = this.SearchAlgorithm.bind(this);
        this.HandleAddNewTodo = this.HandleAddNewTodo.bind(this);
        this.HandleAddNewPost = this.HandleAddNewPost.bind(this);
        this.AddNewUserHandler = this.AddNewUserHandler.bind(this);
    }

    componentDidMount()
    {
        this.getAllUsers();
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

            if(this.state.showfullData && this.state.currentluPresentingUser != undefined)
            {
                this.setState({showfullData: true});  
            }
        }
        else{
            this.setState({currentlySearching: true});
            // console.log("Searchline to lower = " + SearchLine.toLowerCase());
            var newUseersArray = this.state.users.filter((element) => element.name.toLowerCase().includes(SearchLine.toLowerCase()) ||
            element.email.toLowerCase().includes(SearchLine.toLowerCase()));
            this.setState({usersToShow:newUseersArray});
            if(!newUseersArray.includes(this.state.currentluPresentingUser))
            {
                this.setState({showfullData: false});
            }
            else{
                this.setState({showfullData: true});
            }
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
        if(this.state.currentlySearching)
        {
            this.setState({usersToShow:newarrtoshow});
        }
        else{
            this.setState({usersToShow:newArr});
        }


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



        if(this.state.currentlySearching)
        {
            var newarrtoshow = [...this.state.usersToShow];
            var ShowThis = newarrtoshow.map((elem, index) => updatedUsers.find(x => x.id === elem.id));
            var ShowThisfiltered = ShowThis.filter(function(x) {
                return x !== undefined;
           });
            this.setState({usersToShow:ShowThisfiltered});
        }
        else{
            this.setState({usersToShow:updatedUsers});
        }

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

        if(user.todos.data)
        {
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
        else{
            return "green";
        }
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
            if(this.state.showNewuserCreation || this.state.showNewTodoCreation|| this.state.showNewPostCreation)
            {
                this.setState({showNewuserCreation:false,showNewTodoCreation:false,showNewPostCreation:false});
            }
            this.setState({showfullData:!this.state.showfullData});
            var FindUser = this.state.users.filter(usr => usr.id === userid);
            // console.log("filtering result: ");
            // console.log(FindUser.id);
            this.setState({currentluPresentingUser:FindUser[0]});
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

    HandleAddNewPost()
    {
        this.setState({showfullData: false, showNewPostCreation:true });
    }

    HandleAddNewTodo()
    {
        this.setState({showfullData: false,showNewTodoCreation:true });
    }

    
    AddNewUserHandler()
    {
        this.setState({showfullData: false,showNewuserCreation:true });
    }

    AddNewTodo = (newTodoName) =>
    {
        if(newTodoName!= null)
        {
            const index = this.state.users.findIndex((usr) => usr.id === this.state.currentluPresentingUser.id);
            var NewUser = this.state.users[index];
            NewUser = {
                ...this.state.users[index]
            } 
    
            var updatedtodos = [...NewUser.todos.data];

            var NewTodoId = NewUser.todos.data.length > 0 ? NewUser.todos.data[NewUser.todos.data.length - 1].id +1 : 1;
    
            var NewTodo =
            {
                completed: false,
                id:NewTodoId,
                title: newTodoName,
                userId:this.state.currentluPresentingUser.id
            }
    
            updatedtodos.push(NewTodo);
            NewUser.todos.data = updatedtodos;
    
            const updatedUsers = [...this.state.users];
            updatedUsers.splice(index, 1, NewUser); 
            this.setState({users: updatedUsers});
        }
        this.setState({showfullData: true,showNewTodoCreation:false});
    }


    AddNewPost = (title, body) =>
    {
        if(title!= null && body!= null)
        {
            const index = this.state.users.findIndex((usr) => usr.id === this.state.currentluPresentingUser.id);
            var NewUser = this.state.users[index];
            NewUser = {
                ...this.state.users[index]
            } 
    
            var updatedposts = [...NewUser.posts.data];
    
            var Newpost =
            {
                id:NewUser.posts.data.length,
                title: title,
                body: body,
                userId:this.state.currentluPresentingUser.id
            }
    
            updatedposts.push(Newpost);
            NewUser.posts.data = updatedposts;
    
            const updatedUsers = [...this.state.users];
            updatedUsers.splice(index, 1, NewUser); 
            this.setState({users: updatedUsers});
        }
        this.setState({showfullData: true,showNewPostCreation:false});
    }


    AddNewPerson = (Name, Email) =>
    {
        if(Name!= null && Email!= null)
        {
            var NewUser =
            {
                id: this.state.users[this.state.users.length - 1].id + 1,
                name: Name,
                email: Email,
                street: "",
                city: "",
                zipcode:"",
                posts:{
                    data:[]
                },
                todos:{
                    data:[]
                }
            }
                const updatedUsers = [...this.state.users];
                updatedUsers.push(NewUser); 
                this.setState({users: updatedUsers});

                if(this.state.currentlySearching)
                {
                    var newarrtoshow = [...this.state.usersToShow];
                    var ShowThis = newarrtoshow.map((elem, index) => updatedUsers.find(x => x.id === elem.id));
                    var ShowThisfiltered = ShowThis.filter(function(x) {
                        return x !== undefined;
                    });

                    var SearchLineNode = this.myReftoSearchLine.current;
                    var SearchLine = SearchLineNode.value;

                    if(NewUser.name.includes(SearchLine) || NewUser.email.includes(SearchLine))
                    {
                        ShowThisfiltered.push(NewUser);
                    }
                   
                    this.setState({usersToShow:ShowThisfiltered});
                }
                else{
                    this.setState({usersToShow:updatedUsers});
                }
                // this.setState({usersToShow: updatedUsers});
        }
        this.setState({showfullData: false,showNewuserCreation:false});
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
        if(CurrentUsersPosts !== undefined && CurrentUsersPosts.data !== undefined)
        {
            UsersPosts = CurrentUsersPosts.data.map((post, index) =>
                <PersonsPosts key={index} title={post.title} body={post.body}></PersonsPosts>
            ).reverse();
        }
        else{
            UsersPosts = <h2>No posts</h2>;
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
            ).reverse();
        }
        else{
            UsersTodos = <h2>No todos</h2>;
        }

        return (
            <>
                <nav style ={{display:"flex"}}>
                    <div style ={{border: "solid ", borderWidth: "1px", borderColor: "black", height:"fit-content", borderRadius:"50px",width:"50%"}}>  
                            <nav>
                                Search: 
                                <input ref={this.myReftoSearchLine} type="text" onChange={this.SearchAlgorithm}></input>
                                <button onClick={this.AddNewUserHandler}>Add</button>
                            </nav>
                            {usersRep}
                    </div>
                    <div style ={{display:this.state.showfullData ? "block":"none", width:"45%", marginLeft:"10px"}}>
                            <nav><h2>Todos:</h2> <button onClick={this.HandleAddNewTodo}>Add</button></nav>
                            <div style ={{border: "solid ", borderWidth: "1px", borderColor: "black", height:"fit-content", display: "block", width: "100%"}}>
                                {UsersTodos}
                            </div>
                            <h2>Posts:</h2> <button onClick={this.HandleAddNewPost}>Add</button>
                            <div style ={{border: "solid ", borderWidth: "1px", borderColor: "black", height:"fit-content", display: "block", width: "100%"}}>
                                {UsersPosts}
                            </div>
                    </div>
                        <div style ={{display:this.state.showNewuserCreation || this.state.showNewTodoCreation|| this.state.showNewPostCreation ? "block":"none", width:"45%", marginLeft:"10px"}}>
                            <div style ={{display:this.state.showNewTodoCreation ? "block":"none"}}>
                                <AddNewToDoComponent SaveCallback ={this.AddNewTodo}></AddNewToDoComponent>
                            </div>
                            <div style ={{display:this.state.showNewPostCreation ? "block":"none"}}>
                                <AddNewPostComponent SaveCallback={this.AddNewPost}></AddNewPostComponent>
                            </div>
                            <div style ={{display:this.state.showNewuserCreation ? "block":"none"}}>
                                <AddNewPersonComponent SaveCallback={this.AddNewPerson}></AddNewPersonComponent>
                            </div>


                        </div>
                </nav>
            </>
        )
    }

}

export default PersonsContainer