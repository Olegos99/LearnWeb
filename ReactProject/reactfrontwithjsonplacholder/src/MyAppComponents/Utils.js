import Axios from 'axios';

const getAll = (url) => Axios.get(url);

const getById = (url, id) => Axios.get(`${url}/${id}`);

const addObj = (url, obj) => Axios.post(url, obj);

const updateObj = (url, id, obj) => Axios.put(`${url}/${id}`, obj);

const deleteObj = (url, id) => Axios.delete(`${url}/${id}`);

Array.prototype.forEach = function (callback) {
    // this represents our array
    for (let index = 0; index < this.length; index++) {
      // We call the callback for each entry
      callback(this[index], index, this);
    }
  };
  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }


const getUsersFullData = (urlUsers, urlTodos, urlPosts) => {
    return new Promise( async(resolve, reject) => {
        const users = await getAll(urlUsers);

        var AllUsers = [...users.data];

        console.log(AllUsers);

        var NewArrayOfUsers = [];

        await asyncForEach(AllUsers,async(element) => {
        var NewUser =
        {
            id: element.id,
            name: element.name,
            email: element.email,
            street: element.address.street,
            city: element.address.city,
            zipcode: element.address.zipcode,
            posts:[
                {
                    title:"",
                    body:""
                }
            ],
            todos:[
                {
                    title: "",
                    completed: false
                }
            ]
        }
        const userTodos = await getAll(`${urlTodos}?userId=${element.id}`);
        NewUser.todos = userTodos;
        const userPosts = await getAll(`${urlPosts}?userId=${element.id}`);
        NewUser.posts = userPosts;

        element = NewUser;
        NewArrayOfUsers.push(element);
        // console.log(NewArrayOfUsers.length + " array lenght")
        console.log(element)
        });

        if(NewArrayOfUsers.length !== AllUsers.length)
            reject("ops")
        else
            resolve(NewArrayOfUsers);
    });

    // try {
    //     const users = await getAll(urlUsers);

    //     var AllUsers = [...users.data];

    //     console.log(AllUsers);

    //     var NewArrayOfUsers = [];

    //     AllUsers.forEach(async(element) => {
    //         var NewUser =
    //         {
    //             id: element.id,
    //             name: element.name,
    //             email: element.email,
    //             street: element.address.street,
    //             city: element.address.city,
    //             zipcode: element.address.zipcode,
    //             posts:[
    //                 {
    //                     title:"",
    //                     body:""
    //                 }
    //             ],
    //             todos:[
    //                 {
    //                     title: "",
    //                     completed: false
    //                 }
    //             ]
    //         }
    //         const userTodos = await getAll(`${urlTodos}?userId=${element.id}`);
    //         NewUser.todos = userTodos;
    //         const userPosts = await getAll(`${urlPosts}?userId=${element.id}`);
    //         NewUser.posts = userPosts;

    //         element = NewUser;
    //         NewArrayOfUsers.push(element);
    //         console.log(element)
    //     });
      
    //     // await asyncForEach(AllUsers,async(element) => {
    //     //     var NewUser =
    //     //     {
    //     //         id: element.id,
    //     //         name: element.name,
    //     //         email: element.email,
    //     //         street: element.address.street,
    //     //         city: element.address.city,
    //     //         zipcode: element.address.zipcode,
    //     //         posts:[
    //     //             {
    //     //                 title:"",
    //     //                 body:""
    //     //             }
    //     //         ],
    //     //         todos:[
    //     //             {
    //     //                 title: "",
    //     //                 completed: false
    //     //             }
    //     //         ]
    //     //     }
    //     //     const userTodos = await getAll(`${urlTodos}?userId=${element.id}`);
    //     //     NewUser.todos = userTodos;
    //     //     const userPosts = await getAll(`${urlPosts}?userId=${element.id}`);
    //     //     NewUser.posts = userPosts;

    //     //     element = NewUser;
    //     //     NewArrayOfUsers.push(element);
    //     //     console.log(element)
    //     // });



    //     //console.log(NewArrayOfUsers);


    //     return {
    //          NewArrayOfUsers
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
}

export { getAll, getById, addObj, updateObj, deleteObj, getUsersFullData };